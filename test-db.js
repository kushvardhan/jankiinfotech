const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/jankiinfotech';

async function testConnection() {
  try {
    console.log('🔄 Attempting to connect to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');
    
    // Test creating a simple document
    const testSchema = new mongoose.Schema({
      name: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', testSchema);
    
    const testDoc = new TestModel({ name: 'Connection Test' });
    await testDoc.save();
    console.log('✅ Test document saved successfully!');
    
    // Clean up
    await TestModel.deleteOne({ _id: testDoc._id });
    console.log('✅ Test document cleaned up!');
    
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
}

testConnection();
