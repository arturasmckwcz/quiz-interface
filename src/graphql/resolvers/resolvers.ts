import { BuildSchemaOptions } from 'type-graphql';

import { PatientQuestionnaireResolvers } from './PatientQuestionnaireResolvers';
import { QuestionnaireAnswerResolvers } from './QuestionnaireAnswerResolvers';
import { QuestionnaireQuestionResolvers } from './QuestionnaireQuestionResolvers';
import { RawSQLResolver } from './raw';

export const resolvers: BuildSchemaOptions = {
  resolvers: [
    PatientQuestionnaireResolvers,
    QuestionnaireAnswerResolvers,
    QuestionnaireQuestionResolvers,
    RawSQLResolver,
  ],
};
