import "dotenv/config";

const config = {
    PORT: process.env.PORT || 4000,
    CLERK_PUBLISHABLE_KEY : process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY : process.env.CLERK_SECRET_KEY,
    DATABASE_URL : process.env.DATABASE_URL,
    DIRECT_URL : process.env.DIRECT_URL,
}

export default config;