import { Router, Request, Response, json } from 'express';
import Todo from '../db/model/todo.model';

const todoRoutes = Router();

// middleware for parsing json files
todoRoutes.use(json());

function message(m: string) {
  return { message: m };
}

// get all todos
todoRoutes.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await Todo.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(message('an error occured'));
  }
});

// add todo
todoRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (Object.keys(data).length !== 2) {
      res.status(400).json(message('one or more values is missing'));
    } else {
      await new Todo({ ...data }).save();
      res.status(202).json(message('created'));
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(message('an error occured'));
  }
});

// delete todo
todoRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const toDelete = await Todo.findByIdAndDelete(req.params.id);
    if (toDelete === null) {
      res.status(404).json(message('not found'));
    } else {
      res.status(200).json(message('deleted'));
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(message('an error occured'));
  }
});

// edit todo
todoRoutes.put('/:id', async (req: Request, res: Response) => {
  try {
    const toUpdate = await Todo.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    if (toUpdate.n > 0) {
      res.status(200).json(message('changed successfully'));
    } else {
      res.status(404).json(message('not found'));
    }
  } catch (err) {
    res.status(400).json(message('Please send a valid key'));
  }
});

export default todoRoutes;
