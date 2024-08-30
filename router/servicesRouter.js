import express from 'express';
import { servicesData } from '../data/servicesData.js';
import { serviceMembersRouter } from './serviceMembersRouter.js';

export const servicesRouter = express.Router(); //eksportuojama konstanta express.Router() - metodas kad failai butu ne viename index.js faile

servicesRouter.get('/', (req, res) => { //ant servicesRouter daromas Services page(pagrindinis)
    return res.send('Services page');
});

servicesRouter.get('/:serviceName', (req, res) => {  ///:serviceName skirtingi puslapiai tarp servises puslapio
    if (servicesData.includes(req.params.serviceName)) {  // jei info imama is servises data includinant req.params.serviceName (masyvo reiksmes) atitinka masyvo reiksme grazinamas About "${req.params.serviceName}" service...
        return res.send(`About "${req.params.serviceName}" service...`);
    }

    return res.send('Services page: such service is not recognized...'); // jei info imama is servises data neatitinka (masyvo reiksmes) grazinamas Services page: such service is not recognized...
});

servicesRouter.use('/:serviceName/members', serviceMembersRouter); //valdys elgsena faile

//bazinius dalykus priziuri is routeris, gylesnius dalykus atiduoda kitam routeriui