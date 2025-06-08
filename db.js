import mongoose from 'mongoose';

// Define MongoDB URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get default connection
const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

export default db;
