/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('acronyms', {
    id: 'id',
    acronym: { type: 'varchar(100)' },
    definition: { type: 'text' },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('acronyms');
};
