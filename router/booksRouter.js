import express from 'express';

export const booksRouter = express.Router();

booksRouter.get('/', (req, res) => { //get metodas gauti parametram
    return res.send('GET: books');
});

booksRouter.post('/', (req, res) => { //post metodas issiuncia
    return res.send('POST: books');
});

booksRouter.put('/', (req, res) => {  //put metodas viska pakeicia
    return res.send('PUT: books');
});

booksRouter.delete('/', (req, res) => {  //delete metodas istrina
    return res.send('DELETE: books');
});