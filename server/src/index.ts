import express from 'express';
import todoRoutes from './routes/todo';
import './db/db';

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/todo/', todoRoutes);

app.listen(PORT, () => {
  console.log(`server started at the port ${PORT}`);
});
