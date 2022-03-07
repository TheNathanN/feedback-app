import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const feedback = await prisma.feedback.findMany();
  if (feedback.length > 0) {
    res.status(404).json({ message: 'No feedback available' });
  } else {
    res.json(feedback);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const { title, category, detail } = req.body;
  if (!title || !category || !detail) {
    res.status(400).json({ message: 'Please fill out the required fields' });
  }

  const newFeedback = await prisma.feedback.create({
    data: {
      title,
      category,
      description: detail,
    },
  });

  res
    .status(201)
    .json({ data: newFeedback, message: 'Feedback was created successfully' });
});

router.put('/', async (req: Request, res: Response) => {
  const { id, title, category, detail, status } = req.body;

  if (!title || !category || !detail || !status) {
    res.status(400).json({ message: 'Please fill out the required fields' });
  }

  const editedFeedback = await prisma.feedback.update({
    where: {
      id,
    },
    data: {
      title,
      category,
      description: detail,
      status,
    },
  });

  if (editedFeedback) {
    res.status(400).json({ message: 'There was a problem updating feedback' });
  }

  res.json({
    data: editedFeedback,
    message: 'Feedback was updated successfully',
  });
});

router.delete('/', async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: 'Need the id of the feedback to delete' });
  }

  const deletedFeedback = await prisma.feedback.delete({
    where: {
      id,
    },
  });

  if (deletedFeedback) {
    res.status(400).json({ message: 'There was a problem deleting message' });
  }

  res.json({
    dataDeleted: deletedFeedback,
    message: 'Feedback was deleted successfully',
  });
});

export default router;
