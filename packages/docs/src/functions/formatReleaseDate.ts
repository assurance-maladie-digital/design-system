import dayjs from 'dayjs';

export function formatReleaseDate(date: string): string {
	const lastPublished = dayjs(date);
	const days = dayjs().diff(lastPublished, 'day');

	if (days === 0) {
		return 'aujourd’hui';
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
