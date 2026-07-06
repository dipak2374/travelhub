import app from '../server/app.js';
import connectDB from '../server/config/db.js';

let dbPromise = null;

const ensureDbConnection = async () => {
  if (!dbPromise) {
    dbPromise = connectDB().catch((error) => {
      dbPromise = null;
      throw error;
    });
  }

  return dbPromise;
};

export default async function handler(req, res) {
  try {
    await ensureDbConnection();
  } catch (error) {
    console.error('Database connection failed for API request:', error);
    return res.status(500).json({
      success: false,
      message: 'API unavailable. Please check the database configuration.',
    });
  }

  return app(req, res);
}
