import { Arg, Mutation, Resolver } from 'type-graphql';

import { User } from '../../models';
import { token } from '../../middlewares/authorization';

@Resolver()
export class LoginResolvers {
  @Mutation(() => String)
  async login(
    @Arg('username', () => String) username: string,
    @Arg('password', () => String) password: string,
  ): Promise<string | null> {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || user.password !== password) return null;
      return token;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
