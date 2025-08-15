import mongoose from 'mongoose';

// Use env if provided; otherwise fall back to the known cluster URI so the app works out of the box
const DEFAULT_URI = 'mongodb+srv://akashcollege_2005:akaasshsir%402005@schooldb.duh4ya8.mongodb.net/school?retryWrites=true&w=majority';
const MONGODB_URI = process.env.MONGODB_URI || DEFAULT_URI;

let connectionPromise = null;

export async function connectDb() {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (!connectionPromise) {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not set');
    }
    connectionPromise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((conn) => {
      // eslint-disable-next-line no-console
      console.log('MongoDB connected successfully');
      return mongoose.connection;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('MongoDB connection error:', err.message);
      throw err;
    });
  }
  return connectionPromise;
}


