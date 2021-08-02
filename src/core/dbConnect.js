import pool from './dbPool';
import errorCodes from './pgErrorCodes';

const query = async (sql, params, res) => {
  try {
    if (params.length > 0) return await pool.query(sql, params);
    return await pool.query(sql);
  } catch (error) {
    return res.status(500).json({
      message: error.message.replace(/['"]+/g, ''),
      error: errorCodes[error.code],
    });
  }
};

export default query;
