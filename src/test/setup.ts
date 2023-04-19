import { getTestSequelize } from './db/testSequelize';

export default async function globalSetup(): Promise<void> {
  console.log('Running global setup');

  const testSequelize = getTestSequelize();
  await testSequelize.authenticate();

  const ddl = require('../../ddl.json');
  for (const table of ddl.existingTables) {
    await testSequelize.query(table.sql);
    console.log(`created table: ${table.name}`);
  }
}
