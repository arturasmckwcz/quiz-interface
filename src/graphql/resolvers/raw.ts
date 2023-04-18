import { Arg, Query, Resolver } from 'type-graphql';
import { getSequelize } from '../../db';

Resolver();
export class RawSQLResolver {
  @Query(() => String)
  async raw(@Arg('sql', () => String) sql: string) {
    const sequelize = getSequelize();
    const result = await sequelize.query(sql);
    return JSON.stringify(result);
  }
}
