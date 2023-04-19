import * as fs from 'fs';
import * as path from 'path';

export default async function globalTeardown(): Promise<void> {
  console.log('Running global teardown');

  fs.unlink(path.resolve(process.cwd(), 'test.db'), console.error);
}
