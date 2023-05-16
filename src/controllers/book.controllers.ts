import db from '../../models';
import { Request, Response } from 'express';

export const createBook = async (req: Request, res: Response) => {
    try {
        const authorId: string = req.body.authorId;
        const name: string = req.body.name;
        const pages: number = req.body.pages;
        await db.Book.create({
            name: name,
            pages: pages,
            AuthorId: authorId
        });
        res.status(200).json({ 'message': `Book: ${name} has been created successfully :)` });
    } catch (error: any) {
        res.status(400).json(error.message);
    }
};

export const listBooks = async (req: Request, res: Response) => {
    const storeId: string = req.params.storeId;
    db.Book.findAll({
        include: {
            model: db.Store,
            required: true,
            through: { where: { StoreId: storeId } }
        }
    }, { row: true }).then((result: any) => res.status(200)
        .json(result))
        .catch((error: any) => res.status(400).json(error.message));
};

export const listBooksByAuthor = async (req: Request, res: Response) => {
    const authorId: string = req.params.authorId;
    db.Book.findAll({
        where: { AuthorId: authorId },
    }).then((result: any) => res.status(200)
        .json(result))
        .catch((error: any) => res.status(400).json(error.message));
};

export const listCheapestBooksforEachAuthor = async (req: Request, res: Response) => {
    // db.Book.findAll({
    //     attributes: [
    //         'AuthorId',
    //         'name',
    //         db.sequelize.fn('min', db.sequelize.col('price'))],
    //     include: [
    //         {
    //             model: db.Store,
    //             required: true
    //         }
    //     ],
    //     group: ['AuthorId', 'name'],
    //     raw: true,
    // }, { row: true }).then((result: any) => res.status(200)
    //     .json(result))
    //     .catch((error: any) => res.status(400).json(error.message));

    db.sequelize.query('SELECT AuthorId, b.name, min(price) as price FROM book_store.Books as b inner join book_store.StoreBooks as sb on b.id = sb.BookId group by AuthorId, b.name;', {
        model: db.Book,
        mapToModel: true
    }).then((result: any) => res.status(200)
        .json(result))
        .catch((error: any) => res.status(400).json(error.message));
};