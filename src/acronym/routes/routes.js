import express from 'express';
import acronyms from '../controllers/controllers';

const acronymRouter = express.Router();

acronymRouter.get('/acronym', acronyms);

export default acronymRouter;
