const { db } = require('@vercel/postgres');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        roomId VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "players" table`);

    return {createTable};
  } catch {
    console.error('Error seeding players:', error);
    throw error;
  }
}