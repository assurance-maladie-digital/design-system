import { ErrorCodes } from './errorCodes';

export interface ErrorEvent {
	file: File | DataTransferItemList;
	code: string;
}

export type ErrorCodesType = {
	[K in ErrorCodes]: string;
};

export interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}
