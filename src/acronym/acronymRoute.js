import express from 'express';
import {
  acronyms,
  createAcronym,
  updateAcronym,
  deleteAcronym,
} from './acronymController';

const acronymRouter = express.Router();

acronymRouter.get('/acronym', acronyms);

acronymRouter.post('/acronym', createAcronym);

acronymRouter.put('/acronym/:acronym', updateAcronym);

acronymRouter.delete('/acronym/:acronym', deleteAcronym);

export default acronymRouter;
