import { Arg, Query, Resolver } from 'type-graphql';

import {
  PatientInfo,
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
} from '../../models';
import { patientInfoHelper } from '../helpers/patientInfo';

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

  @Query(() => PatientQuestionnaire, { nullable: true })
  async patientQuestionnaire(
    @Arg('patientId', () => Number) patientId: string,
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

  @Query(() => PatientInfo, { nullable: true })
  async patientInfo(
    @Arg('patientId', () => Number) patientId: number,
  ): Promise<PatientInfo | null> {
    try {
      return await patientInfoHelper(patientId);
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
