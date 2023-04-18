import { Query, Resolver } from 'type-graphql';

import { QuestionnaireQuestion } from '../../models';

@Resolver()
export class QuestionnaireQuestionResolvers {
  @Query(() => [QuestionnaireQuestion])
  async questionnaireQuestions() {
    try {
      return await QuestionnaireQuestion.findAll();
    } catch (error) {
      console.error(error);
    }
  }
}
