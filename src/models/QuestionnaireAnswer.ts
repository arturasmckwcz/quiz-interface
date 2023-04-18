import { Optional } from 'sequelize/types';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';

export interface QuestionnaireAnswerAttributes {
  id: number;
  questionnaire_id: number;
  question_id: number;
  answer: string;
}
type QuestionnaireAnswerAttributesDefaultValues = 'id';

export type QuestionnaireAnswerCreationAttributes = Optional<
  QuestionnaireAnswerAttributes,
  QuestionnaireAnswerAttributesDefaultValues
>;

@ObjectType()
@Table({
  modelName: 'QuestionnaireAnswer',
  tableName: 'questionnaire_answer',
  underscored: true,
  timestamps: false,
})
export class QuestionnaireAnswer
  extends Model<
    QuestionnaireAnswerAttributes,
    QuestionnaireAnswerCreationAttributes
  >
  implements QuestionnaireAnswerAttributes
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
  questionnaire_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @Field(() => Number)
  question_id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  answer: string;
}
