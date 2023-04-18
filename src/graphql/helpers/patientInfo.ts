import { Op } from 'sequelize';
import {
  PatientInfo,
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
} from '../../models';

/*
 * let's take the latest questionnaire for dob, firstName and lastName
 * and collect from all questionnaires info for allergies and medications
 */

export const patientInfoHelper = async (
  patientId: number,
): Promise<PatientInfo | null> => {
  const questionnaires = await PatientQuestionnaire.findAll({
    where: { patientId },
  });
  if (!questionnaires?.length) return null;

  const latestQuestionnaire = questionnaires.reduce(
    (acc: PatientQuestionnaire | null, questionnaire) => {
      const currentDate = acc?.completedAt || '';
      const newDate = questionnaire.completedAt || '';
      if (!acc || newDate > currentDate) return questionnaire;
      else return acc;
    },
  );

  const allAnswers: Array<QuestionnaireAnswer & { shortCode?: string }> =
    await QuestionnaireAnswer.findAll({
      where: {
        questionnaireId: { [Op.in]: questionnaires.map(({ id }) => id) },
      },
      include: [
        {
          model: QuestionnaireQuestion,
          attributes: ['shortCode'],
          required: false,
        },
      ],
    });

  const info: PatientInfo = {
    dob: allAnswers.find(
      ({ questionnaireId, question }) =>
        questionnaireId === latestQuestionnaire.id &&
        question?.shortCode === 'dob',
    )?.answer,
    firstName: allAnswers.find(
      ({ questionnaireId, question }) =>
        questionnaireId === latestQuestionnaire.id &&
        question?.shortCode === 'firstName',
    )?.answer,
    lastName: allAnswers.find(
      ({ questionnaireId, question }) =>
        questionnaireId === latestQuestionnaire.id &&
        question?.shortCode === 'lastName',
    )?.answer,
    allergies: allAnswers.reduce((acc: string[], { answer, question }) => {
      if (question?.shortCode === 'allergies' && !acc.includes(answer))
        acc.push(answer);
      return acc;
    }, []),
    medications: allAnswers.reduce((acc: string[], { answer, question }) => {
      if (question?.shortCode === 'medications' && !acc.includes(answer))
        acc.push(answer);
      return acc;
    }, []),
  };

  return info;
};
