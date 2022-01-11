require("dotenv").config();
const {PORT} = process.env;

const config = {
  PORT: PORT || 3000
};

module.exports = config;
