// require('dotenv').config();
import dotenv from 'dotenv'
import { app } from './app.js';
import connectDB from "./db/index.js";
dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
  app.on('error', (error) => {
    console('index::ERR::', error)
    throw error;
  })
  app.listen(PORT, () => {
    console.log(`Server Listening at port ${PORT}`)
  })
})
.catch((error) => {
  console.log(`index::Mongo Db Connection failed::${error}`);
  process.exit(1)
});
// const app = express();

// ;(async () => {
//   try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on('error', (error) =>  {
//       console.error(`ERR: ${error}`)
//       throw error;
//     })
//     app.listen(process.env.PORT, () => {
//       console.log(`Server Listening at port ${process.env.PORT}`)
//     })
//   } catch(error) {
//     console.error(error);
//     throw error;
//   }
// })()