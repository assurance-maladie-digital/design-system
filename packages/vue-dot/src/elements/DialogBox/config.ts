const size = [
	{
		name: 'x-small',
		value: 300
	},
	{
		name: 'small',
		value: 500
	},
	{
		name: 'medium',
		value: 900
	},
	{
		name: 'large',
		value: 1020
	},
	{
		name: 'x-large',
		value: 1124
	}
];

/**
 *  define function of
 *  setting draggable of the dialog box
 *  mousedown to the title's top then drag
 *  to left or right
 */
export function dragDialog(element: HTMLElement) {
	const d: any = {};
	document.addEventListener('mousedown', (e: any) => {
		const closestDialog = e.target.closest('.isDraggable_vdialog');
		if (e.button === 0 && closestDialog != null && e.target.classList.contains('v-card__title')) {// element which can be used to move element
			d.el = closestDialog; // element which should be moved
			d.mouseStartX = e.clientX;
			d.mouseStartY = e.clientY;
			d.elStartX = d.el.getBoundingClientRect().left;
			d.elStartY = d.el.getBoundingClientRect().top;
			d.el.style.position = 'fixed';
			d.el.style.margin = 0;
			d.oldTransition = d.el.style.transition;
			d.el.style.transition = 'none';
		}
	});
	document.addEventListener('mousemove', (e: any) => {
		if (d.el === undefined) {
			return;
		}
		d.el.style.left = Math.min(
			Math.max(d.elStartX + e.clientX - d.mouseStartX, 0),
			window.innerWidth - d.el.getBoundingClientRect().width
		) + 'px';
		d.el.style.top = Math.min(
			Math.max(d.elStartY + e.clientY - d.mouseStartY, 0),
			window.innerHeight - d.el.getBoundingClientRect().height
		) + 'px';
	});
	document.addEventListener('mouseup', () => {
		if (d.el === undefined) {
			return;
		}
		d.el.style.transition = d.oldTransition;
		d.el = undefined;
	});
}

/**
 * function to evaluate the size of
 * the dialog. size could be:
 * x-small(xs) | small(sm) | medium(md) | large(lg) | x-large(xl)
 * or pixel format
 */
export function sizeOfDialog(entry: string) {
	let parseStr = size.filter((el) => el.name === entry);
	if (parseStr.length > 0) {
		entry = parseStr[0].value.toString();
	}
	return entry;
}

