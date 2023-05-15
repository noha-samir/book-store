import db from '../../models';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = uuidv4();
    const name: string = req.body.name;
    await db.Author.create({
      id: authorId,
      name
    });
    res.status(200).json({ 'message': `Author: ${name} has been created successfully :)` });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};