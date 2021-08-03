/* eslint-disable consistent-return */
import query from '../../core/dbConnect';

const acronyms = async (req, res) => {
  try {
    const sql = `SELECT * FROM acronyms`;
    const { rows } = await query(sql, [], res);

    const resource = req.path.split('/')[1];

    const paginateBy = parseInt(req.query.limit, 10) || 10;

    if (paginateBy > 100 || paginateBy < 1)
      return res
        .status(400)
        .json({ status: 400, message: 'Invalid limit parameter' });

    const initialInstance = parseInt(req.query.from, 10);
    const queryset = rows.slice(initialInstance - 1);
    const paginatedQueryset = queryset.slice(0, paginateBy);

    return res
      .header('Access-Control-Expose-Headers', 'Content-Range')
      .header('Access-Control-Expose-Headers', 'Accept-Range')
      .header(
        'Content-Range',
        `${initialInstance - 1}-${initialInstance - 1 + paginateBy - 1}/${
          paginatedQueryset.length
        }`
      )
      .header('Accept-Range', `${resource} 100`)
      .status(206)
      .json(paginatedQueryset);
  } catch (error) {
    return res.status(500);
  }
};

export default acronyms;
