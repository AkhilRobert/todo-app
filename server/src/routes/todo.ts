import { Router, Request, Response, json } from 'express';

const todoRoutes = Router();
todoRoutes.use(json());

function message(m: string) {
  return { message: m };
}

// get all todos
todoRoutes.get('/', (_req: Request, res: Response) => {
  res.json(message('this endpoint will get all todos'));
});

// add todo
todoRoutes.post('/', (_req: Request, res: Response) => {
  res.json(message('this endpoint will add a todo'));
});

// delete todo
todoRoutes.delete('/:id', (_req: Request, res: Response) => {
  res.json(message('this end will delete the todo'));
});

// edit todo
todoRoutes.put('/:id', (_req: Request, res: Response) => {
  res.json(message('this endpoint will edit a todo'));
});

export default todoRoutes;
