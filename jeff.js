const moment = require('moment');

function transformDate(dateStr) {
  dateStr.trim(); // Handle this format M/D/YYYY

  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr)) {
    return moment(dateStr, 'M/D/YYYY').format('YYYY-MM-DD');
  } // List of formats to attempt to parse

  const formats = [
    'YYYY-MM-DD',
    'YYYY-MM-DD:HH:mm',
    'YYYY-MM-DDTHH:mm',
    'YYYY-MM-DD HH:mm',
    'YYYY-MM-DD HH:mmA',
    'MMMM D, YYYY',
    'MMMM DD, YYYY',
    'YYYY/M/D',
    'YYYY-M-D:HH:mm',
    'YYYY-M-DTHH:mm',
    'YYYY-M-D HH:mm',
    'YYYY-M-D HH:mmA',
  ];

  for (const format of formats) {
    const m = moment(dateStr, format);
    if (m.isValid()) {
      return m.format('YYYY-MM-DD');
    }
  } // If none of the formats match, return an error or the original string
  console.error('Date format not recognized:', dateStr);
  dateStr = dateStr.trim();
  return dateStr;
}

console.log(transformDate(`2023-06-21 01:00:00 ET (Toronto)`));
