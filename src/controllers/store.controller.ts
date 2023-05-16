import db from '../../models';
import { Request, Response } from 'express';

/**
 * Function used to create store by name and address
 * @param req 
 * @param res 
 */
export const createStore = async (req: Request, res: Response) => {
  try {
    const name: string = req.body.name;
    const address: string = req.body.address;

    await db.Store.create({
      name,
      address
    });
    res.status(200).json({ 'message': `Store: ${name} has been created successfully :)` });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

/**
 * Function used to sell book by price in specific store by BookId, StoreId and price
 * @param req 
 * @param res 
 */
export const sellBook = async (req: Request, res: Response) => {
  try {
    const BookId: number = req.body.bookId;
    const StoreId: number = req.body.storeId;
    const price: number = req.body.price;

    await db.StoreBooks.create({
      BookId,
      StoreId,
      price
    });
    res.status(200).json({ 'message': `Book has been added to store ID: ${StoreId} with price: ${price} successfully :)` });
  } catch (error: any) {
    res.status(400).json(error.message + ' >> ' + error.parent.code);
  }
};