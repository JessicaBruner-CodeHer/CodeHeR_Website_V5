import dotenv from "dotenv";

dotenv.config();

const env = {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI,
  resendApiKey: process.env.RESEND_API_KEY
};

export default env;
