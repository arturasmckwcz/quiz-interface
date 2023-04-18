import { Optional } from 'sequelize/types';
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';
import { QuestionnaireQuestion } from './QuestionnaireQuestion';

export interface QuestionnaireAnswerAttributes {
  id: number;
  questionnaireId: number;
  questionId: number;
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
  questionnaireId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @Field(() => Number)
  questionId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Field(() => String)
  answer: string;

  @Field(() => QuestionnaireQuestion, { nullable: true })
  @BelongsTo(() => QuestionnaireQuestion, 'questionId')
  question?: QuestionnaireQuestion;
}
