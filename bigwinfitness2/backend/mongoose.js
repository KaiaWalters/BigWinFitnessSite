const mongoose = require('mongoose');

const main = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI is not defined in your environment variables");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

main();

module.exports = main;
