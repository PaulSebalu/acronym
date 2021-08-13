/* eslint-disable consistent-return */
import { query } from '../core/utils';
import matchStr from './acronymUtils';

const acronyms = async (req, res) => {
  try {
    const sql = `SELECT * FROM acronyms`;
    const { rows } = await query(sql, [], res);

    const resource = req.path.split('/')[1];

    const offset = parseInt(req.query.from, 10) || 1;

    const limit = parseInt(req.query.limit, 10) || 10;

    if (limit > 100 || limit < 1)
      return res
        .status(400)
        .json({ status: 400, message: 'Requested limit not allowed' });

    const queryset = rows.slice(offset - 1);
    let paginatedQueryset = queryset.slice(0, limit);

    if (req.query.search)
      paginatedQueryset = matchStr(req.query.search, queryset).slice(0, limit);

    return res
      .header('Access-Control-Expose-Headers', 'Content-Range')
      .header('Access-Control-Expose-Headers', 'Accept-Range')
      .header(
        'Content-Range',
        `${offset - 1}-${offset - 1 + limit - 1}/${rows.length}`
      )
      .header('Accept-Range', `${resource} 100`)
      .status(206)
      .json(paginatedQueryset);
  } catch (error) {
    return res.status(500);
  }
};

const createAcronym = async (req, res) => {
  try {
    const { acronym, definition } = req.body;

    const sql = `INSERT INTO acronyms
  (acronym, definition)
  VALUES ($1, $2) RETURNING *`;

    const { rows } = await query(sql, [acronym.trim(), definition.trim()], res);

    if (rows) {
      return res.status(201).json(rows);
    }
  } catch (error) {
    return res.status(500);
  }
};

const updateAcronym = async (req, res) => {
  try {
    const { acronym, definition } = req.body;

    const sql = `UPDATE acronyms
    SET acronym=$1, definition=$2 WHERE id=$3 RETURNING *`;

    const { rows } = await query(
      sql,
      [
        (acronym && acronym.trim()) || req.acronym.acronym,
        (definition && definition.trim()) || req.acronym.definition,
        req.params.id,
      ],
      res
    );

    if (rows) {
      return res.json(rows);
    }
  } catch (error) {
    return res.status(500);
  }
};

const deleteAcronym = async (req, res) => {
  try {
    const sql = `DELETE FROM acronyms WHERE id=$1`;
    await query(sql, [req.params.id], res);

    return res.status(200).json('Acronym deleted');
  } catch (error) {
    return res.status(500);
  }
};

export { acronyms, createAcronym, updateAcronym, deleteAcronym };
