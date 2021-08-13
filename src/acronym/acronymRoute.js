import express from 'express';
import {
  acronyms,
  createAcronym,
  updateAcronym,
  deleteAcronym,
} from './acronymController';

import { validateAcronym, acronymExists } from './acronymMiddleware';

const acronymRouter = express.Router();

acronymRouter.get('/acronym', acronyms);

acronymRouter.post('/acronym', validateAcronym, validateAcronym, createAcronym);

acronymRouter.put(
  '/acronym/:acronym',
  acronymExists,
  validateAcronym,
  updateAcronym
);

acronymRouter.delete('/acronym/:acronym', acronymExists, deleteAcronym);

export default acronymRouter;
