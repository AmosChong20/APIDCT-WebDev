import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT || 5000
let mongoConnectionString = process.env.MONGO_CONNECTION_URL

export {port,mongoConnectionString}
