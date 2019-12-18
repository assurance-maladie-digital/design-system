// See https://developer.mozilla.org/en-US/docs/Web/API/Storage
// for native specifications

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
	 * Get the name of the nth key in data items
	 * that matches the prefix except the control item
	 *
	 * @param {number} n The index of the key
	 * @returns {string} The name of the key
	 */
	key(n: number): string {
		return this.getAllKeys()[n];
	}

	/**
	 * [Native method]
	 * Get the key value or null
	 * (Prefix is added automatically)
	 *
	 * @returns {any|null} The key value or null
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
	 * Add a new key/value in localStorage or
	 * update it if it already exists
	 * (Prefix is added automatically)
	 *
	 * @returns {void}
	 */
	setItem<T>(key: string, value: T): void {
		if (this.localStorageSupported) {
			// Set the item
			this.set(this.prefix + key, value);
			this.setControlItem();
		}
	}

	/**
	 * [Native method]
	 * Remove an item from localStorage
	 *
	 * @returns {void}
	 */
	removeItem(key: string): void {
		this.filterStorage((storageKey) => {
			if (storageKey === key) {
				delete localStorage[storageKey];
			}
		});
	}

	/**
	 * [Native method]
	 * Clear every item in localStorage
	 * that matches the prefix except the control item
	 *
	 * @returns {void}
	 */
	clear(): void {
		this.filterStorage((storageKey) => {
			delete localStorage[storageKey];
		});
	}

	/**
	 * Get an array of every item value in localStorage
	 * that matches the prefix except the control item
	 *
	 * @returns {Array} Array of every item value
	 */
	getAll(): any[] {
		const items = [] as any[];

		this.filterStorage((storageKey) => {
			items.push(this.get(storageKey));
		});

		return items;
	}

	/**
	 * Get an array of every item key in localStorage
	 * that matches the prefix except the control item
	 *
	 * @returns {Array} Array of every item key
	 */
	private getAllKeys(): string[] {
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

	/**
	 * Wrapper for native localStorage.getItem
	 * that parses the result
	 *
	 * @param {string} key The key to get
	 * @returns {any|null} The value or null
	 */
	private get(key: string): any | null {
		return JSON.parse(localStorage.getItem(key) || JSON.stringify(null));
	}

	/**
	 * Wrapper for native localStorage.setItem
	 * that stringify the value
	 *
	 * @param {string} key The key to set
	 * @param {any} value The value of the key
	 * @returns {void}
	 */
	private set(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	/**
	 * Check if the timestamp is expired and/or the
	 * version in inferior (and so expired)
	 *
	 * @returns {boolean} Is expired
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

	/**
	 * Get the value of control item or null
	 *
	 * @returns {object|null} The value of control item or null
	 */
	private getControlItem(): ControlItem | null {
		if (this.localStorageSupported) {
			return this.get(this.CONTROL_ITEM_KEY);
		}

		return null;
	}

	/**
	 * Set the control item with version and/or expiration
	 *
	 * @returns {void}
	 */
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

	/**
	 * Check if control item is null
	 *
	 * @returns {boolean} ControlItem === null
	 */
	private checkIfOldVersion(): boolean {
		return this.getControlItem() === null;
	}
}
