export const config = {
	textField: {
		hint: 'Format JJ/MM/AAAA',
		label: 'Date',
		persistentHint: true,
		validateOnBlur: true
	},
	menu: {
		closeOnContentClick: false,
		minWidth: '290px',
		nudgeBottom: 45,
		nudgeRight: 45,
		contentClass: 'vd-date-picker-menu'
	},
	btn: {
		icon: true
	},
	datePicker: {
		firstDayOfWeek: 1,
		noTitle: true,
		locale: 'fr'
	},
	icon: {
		color: '#808080'
	}
};
