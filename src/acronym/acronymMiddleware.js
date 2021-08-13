/* eslint-disable consistent-return */
import { createAcronymSchema, editAcronymSchema } from './acronmyValidators';
import { query } from '../core/utils';

const validateAcronym = async (req, res, next) => {
  try {
    // eslint-disable-next-line default-case
    switch (req.method) {
      case 'POST':
        await createAcronymSchema.validateAsync({ ...req.body });
        break;
      case 'PUT':
        await editAcronymSchema.validateAsync({ ...req.body });
        break;
    }
    next();
  } catch (error) {
    return res.status(400).json(error.message.replace(/"/g, ''));
  }
};

const acronymExists = async (req, res, next) => {
  try {
    const sql = `SELECT * FROM acronyms where id = $1`;
    const { rows } = await query(sql, [req.params.acronym]);

    if (rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'Acronym does not exist',
      });
    }
    // eslint-disable-next-line prefer-destructuring
    req.acronym = rows[0];
    next();
  } catch (error) {
    return res.status(500);
  }
};

export { validateAcronym, acronymExists };
