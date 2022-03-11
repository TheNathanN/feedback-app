import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  if (!users) {
    return res
      .status(500)
      .json({ message: 'There was an issue fetching users' });
  }

  res.json({ users });
});

export default router;
