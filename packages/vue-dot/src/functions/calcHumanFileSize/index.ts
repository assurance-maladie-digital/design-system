/** Takes a size in bytes and outputs a human readable value */
export function calcHumanFileSize(size: number, fileSizeUnits: string[], separator = ' '): string {
	// Calc index
	const index = Math.floor(Math.log(size) / Math.log(1024));

	// Calc size
	const computedSize = Number(
		(size / Math.pow(1024, index)).toFixed(2)
	) * 1;

	return computedSize + separator + fileSizeUnits[index];
}
