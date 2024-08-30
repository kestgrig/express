import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

studentsRouter.get('/', (req, res) => {
    const names = Object.values(students).map(student => student.name); //is objecto reiksmiu students isimami studentu vardai

    if (names.length === 0) {  // jei vardu 0 niekas nesimoko ir nieko nera
        return res.send(`Mokosi ${names.length} studentai: niekas.`);
    }

    if (names.length === 1) { // jei vienas yra tiek studentu {names.length} studentu vardai visi istraukiami su {names[0]}
        return res.send(`Mokosi ${names.length} studentai: ${names[0]}.`);
    }

    const str = names.slice(0, -1).join(', ') + ' ir ' + names.at(-1); // objekto reiksmes sukarpomos pridedamas kablelis tarp vardu ir ant paskutines reiksmes(-1) ir
    return res.send(`Mokosi ${names.length} studentai: ${str}.`);
});

studentsRouter.get('/:name', (req, res) => {
    const name = req.params.name.toLowerCase(); // padaromos mazosios raides visos 
    let student = null; // pirmiausia nulis studentu

    for (const key in students) { //jei studento reiksme parametras atitinka reiksme objekte grazinamas parametras
        if (key.toLowerCase() === name) {
            student = students[key];
            break;
        }
    }

    if (student) {
        return res.send(`Studentas, vardu ${student.name} yra ${student.age} metu amziaus ir ${student.isMarried ? 'yra' : 'nera'} vedes.`);
    } else {
        return res.send(`Studento, vardu ${req.params.name} nera.`);
    }
});