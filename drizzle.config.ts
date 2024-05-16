import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql",
    schema: './lib/schema.ts',
    dbCredentials: {
        url: process.env.POSTGRES_URL || 'postgres://postgres:postgres@127.0.0.1:5432/db'
    }
})