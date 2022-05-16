/** Compute a size in bytes into an human readable value */
export function calcHumanFileSize(size: number, fileSizeUnits: string[], separator = ' '): string {
	const index = Math.floor(Math.log(size) / Math.log(1024));

	const computedSize = Number(
		(size / Math.pow(1024, index)).toFixed(2)
	) * 1;

	return computedSize + separator + fileSizeUnits[index];
}
