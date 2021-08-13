import express from 'express';
import { acronyms } from './acronymController';

const acronymRouter = express.Router();

acronymRouter.get('/acronym', acronyms);

export default acronymRouter;
