import express from 'express';
import todoRoutes from './routes/todo.route';
import './db/db';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use('/api/todo/', todoRoutes);

app.listen(PORT, () => {
  console.log(`server started at the port ${PORT}`);
});
