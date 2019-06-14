/**
 * copyToClipboard function
 * It will copy text to the clipboard
 *
 * @param {String} textToCopy The text to copy
 */
export default function copyToClipboard(textToCopy: string) {
	const el = document.createElement('textarea');

	el.value = textToCopy;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';

	document.body.appendChild(el);

	// Check if there is any content selected previously
	// Store selection if found
	// Mark as false to know that no selection existed before
	const selection = document.getSelection();

	if (!selection) {
		return;
	}

	const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);

	if (selected) { // If a selection existed before copying
		selection.removeAllRanges(); // Unselect everything on the HTML document
		selection.addRange(selected); // Restore the original selection
	}
}
