import { Query, Resolver } from 'type-graphql';

import { QuestionnaireAnswer } from '../../models';

@Resolver()
export class QuestionnaireAnswerResolvers {
  @Query(() => [QuestionnaireAnswer])
  async questionnaireAnswers() {
    try {
      return await QuestionnaireAnswer.findAll();
    } catch (error) {
      console.error(error);
    }
  }
}
