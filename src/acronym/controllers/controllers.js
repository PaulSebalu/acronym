/* eslint-disable consistent-return */
import query from "../core/dbconnect";
import acronyms from '../../core/acronym.json';

const acronyms = (req, res) => {
  try {
    // const sql = `SELECT * FROM acronyms`;
    // const { rows } = await query(sql, [], res);
    return res.status(200).json({
      acronyms,
    });
  } catch (error) {
    return res.status(500);
  }
};
