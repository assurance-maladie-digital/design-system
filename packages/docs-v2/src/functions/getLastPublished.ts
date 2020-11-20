import dayjs from 'dayjs';
import { LAST_PUBLISHED } from '../constants';

export function getLastPublished(): string {
	const lastPublished = dayjs(LAST_PUBLISHED);
	const days = dayjs().diff(lastPublished, 'day');

	if (days === 0) {
		return 'aujourd\'hui';
	}

	if (days === 1) {
		return 'hier';
	}

	if (days >= 30) {
		const month = dayjs().diff(lastPublished, 'month');

		return `il y a ${month} mois`;
	}

	return `il y a ${days} jours`;
}
