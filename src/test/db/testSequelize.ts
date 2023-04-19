import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import {
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
  User,
} from '../../models';

let testSequelize: Sequelize;

const models = [
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
  User,
];

export const getTestSequelize = (): Sequelize => {
  if (testSequelize) return testSequelize;

  const sequelizeOptions: SequelizeOptions = {
    logging: false,
    dialect: 'sqlite',
    storage: 'test.db',
  };
  testSequelize = new Sequelize(sequelizeOptions);
  testSequelize.addModels(models);

  return testSequelize;
};

(() => getTestSequelize())();
