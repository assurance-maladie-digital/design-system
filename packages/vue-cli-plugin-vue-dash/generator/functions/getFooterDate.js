const dayjs = require('dayjs');

require('dayjs/locale/fr');
dayjs.locale('fr');

const { capitalizeFirstLetter } = require('../../utils');

/**
 * Returns the current date
 *
 * @returns {string} The current date with `MMMM YYYY` format
 */
function getFooterDate() {
	const month = dayjs().format('MMMM');
	const capitalizedMonth = capitalizeFirstLetter(month);

	const year = dayjs().format('YYYY');
	const date = `${capitalizedMonth} ${year}`;

	return date;
}

module.exports = { getFooterDate };
