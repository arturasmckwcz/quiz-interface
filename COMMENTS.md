# COMMENTS

## File structure

As this is the test to figure style of dev I consider that the file structure of the project is one of the major factors. It should provide a clear representation of the structure of the project itself.

## Why GraphQL?

Well for the simple task it could be considered as overkill. But taking into account that the domain is about kind of pharmacological alertness it might get very complex and GraphQL might be the choice.

## Why it's not kind of CRUD complete?

That would be just boilerplate code.

## Middlewares

Context middlewares for resolvers to use are empty because I didn't need, but they are crucial. Actually I did a bit of copypaste from other projects oh mine.

## Auth

I did very simple token based auth. Normally I'd use jwt tokens and some redis like storage for them. Also it might be needed to use short lifespan tokens and refresh them for a client upon validity of its refresh token.
That would allow a client not to log in frequently while shortening window of opportunity for hacked token.

## Tests

Lack of time. I have spent approx 5 hours on that. I know that it was recommended to stop after 3. But I wanted to deliver something working.

So I did only module test for only one module and for only create method. I understand that normally there should be test that checks integrity of the db representation in models, edge cases, prove functionally, etc. Overall to my understanding tests should make sure you'll be able to do refactoring later on in the future when nobody will remember what and for what everything was done.
