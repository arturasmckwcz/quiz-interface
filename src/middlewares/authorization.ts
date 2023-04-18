import { Request } from 'express';
import { MiddlewareFn, NextFn, ResolverData } from 'type-graphql';

export const token =
  '1x4Tdv830lizg9NExTQdUcCqa7uRwLIQz3GAmTwqKZ9ATzu6XJnLMvXChuHCGUAS';

type Context = {
  req: {
    headers: {
      authorization?: string;
    };
  };
};

export const isAuthorized = async (
  { context }: ResolverData<Partial<{ req: Request }>>,
  next: NextFn,
): Promise<MiddlewareFn<Context>> => {
  if (context?.req?.headers.authorization === 'Bearer ' + token)
    return await next();
  throw new Error('Unauthorized!');
};
