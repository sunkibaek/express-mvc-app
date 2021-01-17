if (!process.env.DB_HOST) {
  throw new Error("API KEY is required");
}

const config = {
  dbHost: process.env.DB_HOST,
};

module.exports = config;
