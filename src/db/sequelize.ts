import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import {
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
} from '../models';

let sequelize: Sequelize;
const models = [
  PatientQuestionnaire,
  QuestionnaireAnswer,
  QuestionnaireQuestion,
];

export const getSequelize = (): Sequelize => {
  if (sequelize) return sequelize;

  const sequelizeOptions: SequelizeOptions = {
    logging: false,
    dialect: 'sqlite',
    storage: 'questionnaire.db',
  };
  sequelize = new Sequelize(sequelizeOptions);
  sequelize.addModels(models);

  return sequelize;
};

(() => getSequelize())();
