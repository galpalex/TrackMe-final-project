import dotenv from "dotenv";
dotenv.config();

const { MONGOOSE_URI } = process.env;

const CorsConfig = {
  origin: ["http://localhost:3000", "https://localhost:3000"],
};

export { MONGOOSE_URI, CorsConfig };
