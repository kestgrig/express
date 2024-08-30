import express from 'express';

export const phonesRouter = express.Router();

phonesRouter.route('/')  //tarp routo metodo iskelti get post put delete metodai
    .get((req, res) => {
        return res.send('GET: phones');
    })
    .post((req, res) => {
        return res.send('POST: phones');
    })
    .put((req, res) => {
        return res.send('PUT: phones');
    })
    .delete((req, res) => {
        return res.send('DELETE: phones');
    });