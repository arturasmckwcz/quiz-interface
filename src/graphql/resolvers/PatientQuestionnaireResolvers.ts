import { Query, Resolver } from 'type-graphql';

import { PatientQuestionnaire } from '../../models';

@Resolver()
export class PatientQuestionnaireResolvers {
  @Query(() => [PatientQuestionnaire])
  async patientQuestionnaires() {
    try {
      return await PatientQuestionnaire.findAll();
    } catch (error) {
      console.error(error);
    }
  }
}
