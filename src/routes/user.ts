import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    res.status(400).json({ message: 'Please login' });
  }

  const usersKey = await prisma.key.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
    },
  });

  res.json({ message: 'Hello world' });
});

export default router;
