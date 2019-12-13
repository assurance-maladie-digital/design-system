interface ControlItem {
	version?: number;
	expiresAt?: number;
}

export default class LocalStorageUtility {
	readonly localStorageSupported: boolean;

	/** Integer number */
	readonly version?: number;

	/** Passive expiration time in ms */
	readonly expiration?: number;

	readonly prefix: string;

	private CONTROL_ITEM_KEY = 'vd-storage-control';

	/**
	 * LocalStorage API implementation but with
	 * prefixes, versioning and passive expiration
	 */
	constructor(
		version?: number,
		expiration?: number,
		prefix = 'vd-'
	) {
		this.localStorageSupported = typeof window.localStorage !== 'undefined' && window.localStorage !== null;

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

	/**
	 * [Native method]
	 */
	setItem<T>(key: string, value: T) {
		if (this.localStorageSupported) {
			// Set the item
			this.set(this.prefix + key, value);
			this.setControlItem();
		}
	}

	/**
	 * [Native method]
	 */
	getItem<T = any>(key: string): T | null {
		const controlItem = this.getControlItem();

		if (this.localStorageSupported && controlItem) {
			const hasExpired = this.checkIfExpired();

			if (hasExpired) {
				this.clear();
			} else {
				this.setControlItem();

				return this.get(this.prefix + key);
			}
		}

		return null;
	}

	/**
	 * [Native method]
	 * Clear every item in localStorage that matches the prefix
	 * except the control item
	 *
	 * @returns {void}
	 */
	clear(): void {
		this.filterStorage((storageKey) => {
			delete localStorage[storageKey];
		});
	}

	/**
	 * [Native property]
	 * The number of data items stored that
	 * matches the prefix expect controlItem
	 *
	 * @returns {number} Length of data
	 */
	get length(): number {
		return this.getAll().length;
	}

	/**
	 * [Native method]
	 */
	key(n: number) {
		return this.getAllKeys()[n];
	}

	/**
	 * Get an array of every item value in localStorage
	 * that matches the prefix except the control item
	 */
	getAll() {
		const items = [] as any[];

		this.filterStorage((storageKey) => {
			items.push(this.get(storageKey));
		});

		return items;
	}

	/** */
	private getAllKeys() {
		const keys = [] as string[];

		this.filterStorage((storageKey) => {
			keys.push(storageKey);
		});

		return keys;
	}

	/**
	 * Call a function for every item in localStorage
	 * that matches the prefix expect controlItem
	 *
	 * @param {Function} callback The function to call
	 * @returns {void}
	 */
	private filterStorage(callback: (storageKey: string) => void): void {
		for (const storageKey in localStorage) {
			if (storageKey.startsWith(this.prefix) && storageKey !== this.CONTROL_ITEM_KEY) {
				callback(storageKey);
			}
		}
	}

	private get(key: string) {
		return JSON.parse(localStorage.getItem(key) || JSON.stringify(null));
	}

	private set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	/**
	 * Check if the timestamp is expired and/or the
	 * version in inferior (and so expired)
	 *
	 * @returns {boolean} Expired
	 */
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

	private checkIfOldVersion() {
		return this.getControlItem() === null;
	}

	private setControlItem() {
		const expiresAt = this.expiration ? new Date().getTime() + this.expiration / 1 : undefined;

		const controlItemObj: ControlItem = {
			version: this.version,
			expiresAt
		};

		if (this.localStorageSupported) {
			this.set(this.CONTROL_ITEM_KEY, controlItemObj);
		}
	}
}
