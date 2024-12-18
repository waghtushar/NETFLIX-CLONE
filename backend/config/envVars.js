import dotenv from "dotenv";

dotenv.config({ path: '../.env' })

export const ENV_VARS = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY
}