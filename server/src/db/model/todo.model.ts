import { model, Schema } from 'mongoose';

const TodoSchema = new Schema({
  title: String,
  finished: Boolean,
});

export default model('Todos', TodoSchema);
