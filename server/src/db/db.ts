import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://localhost:27017/todos',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to the database');
  }
);
