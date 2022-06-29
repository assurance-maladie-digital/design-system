/* eslint-disable @typescript-eslint/no-explicit-any */
/** @see https://developer.mozilla.org/en-US/docs/Web/API/Storage for native specifications */

interface ControlItem {
	version?: number;
	expiresAt?: number;
}

/** @see https://gist.github.com/paulirish/5558557 */
function isStorageAvailable(): boolean {
	try {
		const item = 'test';

		localStorage.setItem(item, item);
		localStorage.removeItem(item);

		return true;
	} catch (e) {
		return false;
	}
}

export class LocalStorageUtility {
	readonly localStorageSupported: boolean;

	/** Integer number */
	readonly version?: number;

	/** Passive expiration time in ms */
	readonly expiration?: number;

	readonly prefix: string;

	private CONTROL_ITEM_KEY = 'vd-storage-control';

	constructor(
		version?: number,
		expiration?: number,
		prefix = 'vd-'
	) {
		this.localStorageSupported = isStorageAvailable();

		this.prefix = prefix;

		if (version && Number.isInteger(version)) {
			this.version = version;
		} else {
			this.version = undefined;
		}

		this.expiration = expiration;

		const isOldVersion = this.checkIfOldVersion();
		const expired = this.checkIfExpired();

		if (isOldVersion || expired) {
			this.clear();
			this.setControlItem();
		}
	}

	get length(): number {
		return this.getAll().length;
	}

	key(n: number): string {
		return this.getAllKeys()[n];
	}

	getItem<T = any>(key: string): T | null {
		const controlItem = this.getControlItem();

		if (!this.localStorageSupported && !controlItem) {
			return null;
		}

		const hasExpired = this.checkIfExpired();

		if (hasExpired) {
			this.clear();
			return null;
		}

		this.setControlItem();

		return this.get(this.prefix + key);
	}

	setItem<T>(key: string, value: T): void {
		if (this.localStorageSupported) {
			this.set(this.prefix + key, value);
			this.setControlItem();
		}
	}

	removeItem(key: string): void {
		this.filterStorage((storageKey) => {
			if (storageKey === this.prefix + key) {
				delete localStorage[storageKey];
			}
		});
	}

	clear(): void {
		this.filterStorage((storageKey) => {
			delete localStorage[storageKey];
		});
	}

	getAll(): any[] {
		const items = [] as any[];

		this.filterStorage((storageKey) => {
			items.push(this.get(storageKey));
		});

		return items;
	}

	private getAllKeys(): string[] {
		const keys = [] as string[];

		this.filterStorage((storageKey) => {
			keys.push(storageKey);
		});

		return keys;
	}

	private filterStorage(callback: (storageKey: string) => void): void {
		if (!this.localStorageSupported) {
			return;
		}

		for (const storageKey in localStorage) {
			if (storageKey.startsWith(this.prefix) && storageKey !== this.CONTROL_ITEM_KEY) {
				callback(storageKey);
			}
		}
	}

	/** Wrapper for localStorage.getItem that parses the result */
	private get(key: string): any | null {
		return JSON.parse(localStorage.getItem(key) || JSON.stringify(null));
	}

	/** Wrapper for localStorage.setItem that stringify the value */
	private set(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	private checkIfExpired(): boolean {
		const controlItem = this.getControlItem();

		if (!controlItem) {
			return true;
		}

		let timeExpired = false;
		let versionExpired = false;

		if (controlItem.expiresAt) {
			timeExpired = controlItem.expiresAt < new Date().getTime();
		}

		if (controlItem.version && this.version) {
			versionExpired = controlItem.version < this.version;
		}

		return timeExpired || versionExpired;
	}

	private getControlItem(): ControlItem | null {
		if (this.localStorageSupported) {
			return this.get(this.CONTROL_ITEM_KEY);
		}

		return null;
	}

	private setControlItem(): void {
		const expiresAt = this.expiration ? new Date().getTime() + this.expiration / 1 : undefined;

		const controlItemObj: ControlItem = {
			version: this.version,
			expiresAt
		};

		if (this.localStorageSupported) {
			this.set(this.CONTROL_ITEM_KEY, controlItemObj);
		}
	}

	private checkIfOldVersion(): boolean {
		return this.getControlItem() === null;
	}
}
