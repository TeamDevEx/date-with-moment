const moment = require('moment');

dateFormatier = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

module.exports = dateFormatier;
