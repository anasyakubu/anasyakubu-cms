import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "anasyakubu-cms-db",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// import mongoose from "mongoose";

// const connection = {};

// async function connect() {
//   if (connection.isConnected) {
//     return;
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConnected === 1) {
//       return;
//     }
//     await mongoose.disconnect();
//   }
//   const db = await mongoose.connect(process.env.MONGO_URL, {
//     dbName: "dev-blog", // Set the database name here
//     bufferCommands: false,
//     connectTimeoutMS: 30000,
//   });
//   connection.isConnected = db.connections[0].readyState;
// }

// async function disconnect() {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === "production") {
//       await mongoose.disconnect();
//       connection.isConnected = false;
//     }
//   }
// }

// const db = { connect, disconnect };
// export default db;
