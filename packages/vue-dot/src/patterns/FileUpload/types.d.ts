import { ErrorCodes } from './errorCodes';

export type ErrorCodesType = {
	[K in ErrorCodes]: string;
};

export interface ErrorEvent {
	file: File | DataTransferItemList;
	code: ErrorCodes;
}
