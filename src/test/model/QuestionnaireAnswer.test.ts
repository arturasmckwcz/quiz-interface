import {
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
} from '../../models';
import { getTestSequelize } from '../db/testSequelize';

describe('QuestionnaireAnswer', () => {
  let questionnaire: PatientQuestionnaire;
  let questions: QuestionnaireQuestion[];

  beforeAll(async () => {
    getTestSequelize().authenticate();

    questionnaire = await PatientQuestionnaire.create({
      patientId: 1,
      completedAt: '1888-08-08',
    });
    await QuestionnaireQuestion.bulkCreate([
      {
        description: '',
        shortCode: 'dob',
      },
      {
        description: '',
        shortCode: 'firstName',
      },
      {
        description: '',
        shortCode: 'lastName',
      },
      {
        description: '',
        shortCode: 'allergies',
      },
      {
        description: '',
        shortCode: 'medications',
      },
    ]);
    questions = await QuestionnaireQuestion.findAll();
  });
  afterAll(async () => {
    await QuestionnaireAnswer.truncate();
    await QuestionnaireQuestion.truncate();
    await PatientQuestionnaire.truncate();
  });

  describe('create', () => {
    const answers: QuestionnaireAnswer[] = [];
    beforeAll(async () => {
      for (const question of questions)
        answers.push(
          await QuestionnaireAnswer.create({
            questionnaireId: questionnaire.id,
            questionId: question.id,
            answer: '',
          }),
        );
    });

    it('should create an answer for each question', async () => {
      expect(answers.length).toBe(questions.length);
    });
  });
});
