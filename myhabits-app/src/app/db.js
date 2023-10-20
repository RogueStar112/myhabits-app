// db.js

import mongoose from "mongoose";

const connectionOptions = {
  useUnifiedTopology: true,
  // Add other options like authentication if needed
};

const connectionUri = process.env.MONGODB_URI;
const dbName = "myhabits";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(`${connectionUri}/${dbName}`, connectionOptions);
  }
  return mongoose.connection;
};

export { connectToDatabase };
