import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const replies = await prisma.reply.findMany();

  if (!replies) {
    res.status(404).json({ message: 'No replies found' });
  }

  res.json({ replies });
});

export default router;
