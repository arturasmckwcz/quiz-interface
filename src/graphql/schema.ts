import { buildSchema } from 'type-graphql';

import { resolvers } from './resolvers';
import { isAuthorized } from '../middlewares/authorization';

export const schema = buildSchema({
  ...resolvers,
  globalMiddlewares: [isAuthorized],
  validate: false,
});
