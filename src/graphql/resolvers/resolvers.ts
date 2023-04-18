import { BuildSchemaOptions } from 'type-graphql';

import { LoginResolvers } from './LoginResolvers';
import { PatientQuestionnaireResolvers } from './PatientQuestionnaireResolvers';
import { QuestionnaireAnswerResolvers } from './QuestionnaireAnswerResolvers';
import { QuestionnaireQuestionResolvers } from './QuestionnaireQuestionResolvers';
import { RawSQLResolver } from './raw';

export const resolvers: BuildSchemaOptions = {
  resolvers: [
    LoginResolvers,
    PatientQuestionnaireResolvers,
    QuestionnaireAnswerResolvers,
    QuestionnaireQuestionResolvers,
    RawSQLResolver,
  ],
};
