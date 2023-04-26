var dotenv = require('dotenv')
dotenv.config({ path: '.env' });

// Use the environment variables
const myModule = {
    apiKey: process.env.API_KEY,
}

module.exports = myModule