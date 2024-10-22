export const NUMBER_LENGTH = 13;
export const KEY_LENGTH = 2;

export function checkNIR(nir: string): boolean {
	nir = nir.replace(/\s+/g, '').toUpperCase();

	const nirRegex = new RegExp(
		'^' +
		'(?<sexe>[12])' +
		'(?<anneeNaissance>\\d{2})' +
		'(?<moisNaissance>0[1-9]|1[0-2]|[2-9][0-9])' +
		'(?<departementNaissance>\\d{2}|2A|2B)' +
		'(?<communeNaissance>\\d{3})' +
		'(?<rangInscription>\\d{3})' +
		'(?<cle>9[0-7]|[0-8]\\d)?' +
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
