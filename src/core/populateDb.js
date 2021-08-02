/* eslint-disable no-console */
import acronyms from './acronym.json';
import pool from './dbPool';
import errorCodes from './pgErrorCodes';

const populateData = () => {
  acronyms.forEach((acronym) => {
    const params = Object.entries(acronym).flat();

    const sql = `INSERT INTO acronyms
    (acronym, definition) 
      VALUES ($1, $2) RETURNING *`;

    pool.query(sql, params, (err, res) => {
      if (err) {
        const message = err.message.replace(/['"]+/g, '');
        const pgErrorCode = errorCodes[err.code];
        console.log(`Error:${message}`);
        console.log(`pgErrorCode:${pgErrorCode}`);
      }
      if (res) console.log(`${res.rows[0].acronym} added to database`);
    });
  });
};

populateData();
