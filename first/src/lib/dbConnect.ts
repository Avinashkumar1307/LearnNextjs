import mongoose from "mongoose";

type ConnectionsObject = {
  isConnected?: number;
};

const connection: ConnectionsObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already database is connected");
    return;
  } else {
    try {
      const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
      connection.isConnected = db.connections[0].readyState;
      console.log("DB is connected");
    } catch (error) {
      console.log("database connection fail");
      process.exit(1);
    }
  }
}

export default dbConnect;
