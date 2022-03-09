/** Copy text to the clipboard */
export function copyToClipboard(textToCopy: string): void {
	// Use a textarea, so we can use execCommand
	const el = document.createElement('textarea');

	el.value = textToCopy;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';

	document.body.appendChild(el);

	const selection = document.getSelection();

	let selected: Range | false = false;

	if (selection) {
		// Store previous selection (or false) to restore it after
		selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
	}

	el.select();
	document.execCommand('copy'); // TODO: Use Clipboard API when supported
	document.body.removeChild(el);

	// If a selection existed before copying
	if (selection && selected) {
		selection.removeAllRanges(); // Unselect everything on the HTML document
		selection.addRange(selected); // Restore the original selection
	}
}
