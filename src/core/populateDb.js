/* eslint-disable no-console */
import acronyms from './acronym.json';
import { pool } from './utils';
import errorCodes from './pgErrorCodes';

const populateData = () => {
  let count = 0;
  acronyms.forEach((acronym) => {
    const params = Object.entries(acronym).flat();

    const sql = `INSERT INTO acronyms
    (acronym, definition) 
      VALUES ($1, $2) RETURNING *`;

    pool.query(sql, params, (err, res) => {
      if (err) {
        const message = err.message.replace(/['"]+/g, '');
        const pgErrorCode = errorCodes[err.code];
        throw new Error(`${message}\npgErrorCode:${pgErrorCode}`);
      }

      if (res.rows) {
        count += 1;
      }

      if (count === acronyms.length)
        console.log(`${count} acronyms added to the database`);
    });
  });
};

populateData();
