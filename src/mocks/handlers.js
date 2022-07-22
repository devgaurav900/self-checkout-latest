import { rest } from 'msw';
import articlesEn from './data/articles_en.json';
import transactions from './data/transactions.json';

export const handlers = [
    rest.get('/articles/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(articlesEn.articles));
    }),

    rest.get('/transactions', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(transactions.transactions))
    }),

    rest.post('/transactions', (req, res, ctx) => {
        console.log('ctx', ctx);

    })
]