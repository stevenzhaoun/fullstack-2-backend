import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {

  // assume we read user data from database

  const users = [
    { id: 1, name: 'John Doe1' },
    { id: 2, name: 'Frank test' },
  ]

  res.json(users);
});

router.get('/:id', (req, res) => {
  res.send(`user ${req.params.id}`);
})

export default router;