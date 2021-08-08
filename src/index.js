import express, { json, urlencoded } from 'express';
import cors from 'cors';
import env from 'dotenv';
import pino from 'pino';
import expressPino from 'express-pino-logger';

import acronymRouter from './acronym/acronymRoute';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

env.config();

const app = express();
app.use(cors(), json(), urlencoded({ extended: true }), expressLogger);

app.use(acronymRouter);

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'World Texting Foundation, REST API',
  });
});

app.use('*', (req, res) =>
  res.status(405).json({
    status: 405,
    message: 'You need to be a little more specific...',
  })
);

let PORT;

if (process.env.NODE_ENV === 'test') {
  PORT = 3000;
} else {
  PORT = process.env.PORT || 4000;
}

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}...`);
});

export default app;
