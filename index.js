import express from 'express'; // susiimportuojamas kodas

import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { discountRouter } from './router/discountRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { phonesRouter } from './router/phonesRouter.js';
import { apiRouter } from './router/apiRouter.js';

const app = express(); //inicijuojamas app paimant express(), sukuriamas objektas
const port = 3000;


// for parsing application/json
app.use(express.json({
    type: 'application/json',
}));

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {  //pagrindinis //request , response visa info apie uzklausa ir info klientui
    return res.send('Home page');
});

app.get('/about', (req, res) => { //kito page kurimas, /kelias, (req, res)-funkcija
    return res.send('about page');
});

//supaprastinta versija naudojant app.use, nurodant puslapio pradzia pvz '/discount' ir nurodant js faila is import pavadinima
app.use('/api', apiRouter);
app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/discount', discountRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);

// app.get('/services', (req, res) => {
//     return res.send('Services page');
// });

// app.get('/services/design', (req, res) => {
//     return res.send('Services page: design');
// });

// app.get('/services/ux', (req, res) => {
//     return res.send('Services page: UX');
// });

// app.get('/services/coding', (req, res) => {
//     return res.send('Services page: Programming');
// });

// app.get('/services/hacking', (req, res) => {
//     return res.send('Services page: hacking');
// });

// app.get('/services/*', (req, res) => {
//     return res.send('Services page: such service is not recognise');
// });

// app.get('/team', (req, res) => {
//     return res.send('Team page');
// });


// // app.get('/team/prime', (req, res) => {
// //     return res.send('Team member page: Prime');
// // });

// // app.get('/team/chuck*', (req, res) => {
// //     return res.send('Team member page: Chuck');
// // });

// app.get('/team/:name', (req, res) => {
//     return res.send(`Team member "${req.params.name}" page not found.`);
// });

// app.get('/students', (req, res) => {
//     return res.send('Mokosi 4 studentai: Jonas, Maryte, Petras ir Ona.');
// });

app.get('*', (req, res) => {   //404 page kurimas(visi kiti)
    return res.send('Ups... 404 page');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`); //tinklapis(nuoroda i ji)
}); //stebimas app, port-tinkle, App running on:.... palengvinimas pasileisti faila 


// get - registravimas