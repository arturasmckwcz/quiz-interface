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

export interface QuestionnaireQuestionAttributes {
  id: number;
  description: string;
  shortCode: string;
}
type QuestionnaireQuestionAttributesDefaultValues = 'id';

export type QuestionnaireQuestionCreationAttributes = Optional<
  QuestionnaireQuestionAttributes,
  QuestionnaireQuestionAttributesDefaultValues
>;

@ObjectType()
@Table({
  modelName: 'QuestionnaireQuestion',
  tableName: 'questionnaire_question',
  underscored: true,
  timestamps: false,
})
export class QuestionnaireQuestion
  extends Model<
    QuestionnaireQuestionAttributes,
    QuestionnaireQuestionCreationAttributes
  >
  implements QuestionnaireQuestionAttributes
{
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  shortCode: string;
}
