/**
 * copyToClipboard function
 * It will copy text to the clipboard
 *
 * @param {string} textToCopy The text to copy
 */
export default function copyToClipboard(textToCopy: string) {
	/** Use a text area, so we can use execCommand */
	const el = document.createElement('textarea');

	// Configure the element to be readonly and hidden
	el.value = textToCopy;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';

	// Append the element
	document.body.appendChild(el);

	// Document selection
	const selection = document.getSelection();

	let selected: Range | false = false;

	if (selection) {
		// Store previous selection (or false) to restore it after
		selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
	}

	// Select the text
	el.select();
	// Copy it
	document.execCommand('copy');
	// Then remove the element from the DOM
	document.body.removeChild(el);

	// If a selection existed before copying
	if (selection && selected) {
		selection.removeAllRanges(); // Unselect everything on the HTML document
		selection.addRange(selected); // Restore the original selection
	}
}
