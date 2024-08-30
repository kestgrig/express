import express from 'express';

export const apiRouter = express.Router();


//GET: /api/
apiRouter.get('/', (req, res) => {
    const data = {     //duomenys
        state: 'error',
        message: 'Nurodyk konkretu API endpoint\'a',
    };
    return res.json(data); //json formatu
});

const marks = [];  //tuscias masyvas iskeltas pries 

apiRouter.get('/my-marks', (req, res) => { //gauti
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => { //sukurti
    marks.push(req.body.mark); //pridedami pazymiai

    return res.json({
        state: 'success',
        message: 'Pazymys pridetas',
    });
});

apiRouter.put('/my-marks/:index', (req, res) => { //papildyti 
    const { index } = req.params; //pozicija indeksas
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark; //naujas pazimys

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias... nera ko redaguoti',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo redaguoti pazymio indexas negali virsyti leistinos ribos (riba: ${marks.length - 1}).`,
        });
    }

    // newMarkValue validacijos....

    marks[position] = newMarkValue;

    return res.json({
        state: 'success',
        message: 'Pazymys paredaguotas',
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => { //istrinami 
    const { index } = req.params; //issitarukiu index ir params
    const position = parseFloat(index); //pozicija issiparsinama is index

    //apsaugos

    if (!Number.isInteger(position) || position < 0) { // jeigu nera skaicius integer arba pozicija maziau uz 0
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) { //jeigu ilgis yra 0
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias... nera ko papildomai salinti',
        });
    }

    if (position >= marks.length) { //jeigu pozicija didesne arba lygi pazimiu ilgiui
        return res.json({
            state: 'error',
            message: `Norimo pasalinti pazymio indexas negali virsyti leistinos ribos (riba: ${marks.length - 1}).`,
        });
    }

    marks.splice(position, 1); //pazymiai funkcija splice pasalina po 1

    return res.json({
        state: 'success',
        message: 'Pazymys pasalintas',
    });
});
