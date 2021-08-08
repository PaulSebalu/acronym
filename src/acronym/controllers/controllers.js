/* eslint-disable consistent-return */
import { query } from '../../core/utils';
import matchStr from '../utils/utils';

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

export default acronyms;
