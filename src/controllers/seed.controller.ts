import db from '../../models';
import { Request, Response } from 'express';
import { books } from '../../seeders/books';
import { stores } from '../../seeders/stores';
import { authors } from '../../seeders/author';
import { storeBooks } from '../../seeders/storeBooks';

const createAuthors = () => {
  authors.forEach(async author => {
    await db.Author.create(author);
  })
}

const createBooks = () => {
  books.forEach(async book => {
    await db.Book.create(book);
  })
}

const createStores = () => {
  stores.forEach(async store => {
    await db.Store.create(store);
  })
}

const createStoreBooks = () => {
  storeBooks.forEach(async store => {
    await db.StoreBooks.create(store);
  })
}

//FIXME: catch database error to not crash the application
/**
 * Function used to add some seed data in the database.
 * @param req 
 * @param res 
 */
export const createSeeds = async (req: Request, res: Response) => {
  db.sequelize.sync().then(() => {
    try {
      createAuthors();
      createBooks();
      createStores();
      createStoreBooks();
    }
    catch (error: any) {
      res.status(400).json(error.message);
    }
  }).catch((error: any) => { res.status(400).json(error.message) });
  res.status(200).json({ 'message': `Database is filled with data successfully :)` });
};