import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT
let mongoConnectionString = process.env.MONGO_CONNECTION_URL
// console.log(process.env)
export {port,mongoConnectionString}
