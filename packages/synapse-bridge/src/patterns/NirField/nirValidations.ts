export const NUMBER_LENGTH = 13;
export const KEY_LENGTH = 2;

export function checkNIR(nir: string): boolean {
	nir = nir.replace(/\s+/g, '').toUpperCase();

	const nirRegex = new RegExp(
		'^' +
		'(?<sexe>[1-4]|7|8)' +
		'(?<anneeNaissance>\\d{2})' +
		'(?<moisNaissance>0[1-9]|1[0-2]|2[0-9]|3[0-9]|4[0-2])' +
		'(?<departementNaissance>\\d{2}|2A|2B|96|97\\d|98\\d)' +
		'(?<communeNaissance>\\d{3})' +
		'(?<rangInscription>\\d{3})' +
		'(?<cle>[0-9]{2})?' +
		'$',
		'i'
	);
	return nirRegex.test(nir);
}

export function computeNIRKey(nir: string): string {
	nir = nir.replace(/\s+/g, '').toUpperCase();

	let nirNumberPart = nir.substring(0, 13);

	nirNumberPart = nirNumberPart.replace('2A', '19').replace('2B', '18');

	const nirNumber = BigInt(nirNumberPart);

	const key = 97n - (nirNumber % 97n);

	return key.toString().padStart(2, '0');
}

export function isNIRKeyValid(nir: string): boolean {
	nir = nir.replace(/\s+/g, '').toUpperCase();

	if (nir.length !== 15) {
		return true;
	}

	const providedKey = nir.substring(13, 15);
	const computedKey = computeNIRKey(nir);

	return providedKey === computedKey;
}
