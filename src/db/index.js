import mongoose from "mongoose";

const connectDB = async () => {
  try{
    const mongooseConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.PORT}`);
    console.log('db::mongo db connected !!', mongooseConnectionInstance.connection.host)
  } catch(error) {
    console.error(error);
    throw error;
  }
}

export default connectDB;

connectDB();