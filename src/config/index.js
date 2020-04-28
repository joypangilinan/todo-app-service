require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  database: {
    db_url: process.env.DB_URL,
  },
};
