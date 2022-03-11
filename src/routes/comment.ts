import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany();

  if (comments === []) {
    res.status(404).json({ message: 'Can not find comments' });
  }

  res.json({ comments });
});

export default router;
