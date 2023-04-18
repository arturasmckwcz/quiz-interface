import { Arg, Query, Resolver } from 'type-graphql';

import {
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
} from '../../models';

@Resolver()
export class PatientQuestionnaireResolvers {
  @Query(() => [PatientQuestionnaire])
  async patientQuestionnaires(): Promise<PatientQuestionnaire[]> {
    try {
      return await PatientQuestionnaire.findAll({
        include: [
          {
            model: QuestionnaireAnswer,
            required: false,
            include: [{ model: QuestionnaireQuestion, required: false }],
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  @Query(() => PatientQuestionnaire)
  async patientQuestionnaire(
    @Arg('patientId', () => String) patientId: string,
  ): Promise<PatientQuestionnaire | null> {
    try {
      return await PatientQuestionnaire.findOne({
        where: { patientId },
        include: [
          {
            model: QuestionnaireAnswer,
            required: false,
            include: [{ model: QuestionnaireQuestion, required: false }],
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
