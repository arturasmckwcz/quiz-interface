import { Optional } from 'sequelize/types';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';

import { QuestionnaireAnswer } from './QuestionnaireAnswer';

export interface PatientQuestionnaireAttributes {
  id: number;
  patientId: number;

  /*
   * normally these fields should be of Date type, but strings in the DB are not
   * convertible to Date so most probably getter/setter is needed to have it
   * in the DB as it is now while having Date type in the model for calculations,
   * etc.
   * It definitely would take too much time and is not important as there's no
   * use in this challenge
   */
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}
type PatientQuestionnaireAttributesDefaultValues =
  | 'id'
  | 'createdAt'
  | 'updatedAt';

export type PatientQuestionnaireCreationAttributes = Optional<
  PatientQuestionnaireAttributes,
  PatientQuestionnaireAttributesDefaultValues
>;

@ObjectType()
@Table({
  modelName: 'PatientQuestionnaire',
  tableName: 'patient_questionnaire',
  underscored: true,
  timestamps: true,
})
export class PatientQuestionnaire
  extends Model<
    PatientQuestionnaireAttributes,
    PatientQuestionnaireCreationAttributes
  >
  implements PatientQuestionnaireAttributes
{
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @Field(() => Number)
  patientId: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  @Field(() => String, { nullable: true })
  completedAt?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  createdAt: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  updatedAt: string;

  @Field(() => [QuestionnaireAnswer], { nullable: true })
  @HasMany(() => QuestionnaireAnswer, 'questionnaireId')
  answers: QuestionnaireAnswer[];
}
