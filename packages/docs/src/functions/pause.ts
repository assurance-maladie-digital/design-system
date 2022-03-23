export async function pause(duration = 1000): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, duration);
	})
}
