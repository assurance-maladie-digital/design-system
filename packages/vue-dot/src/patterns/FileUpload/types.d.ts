export interface ErrorEvent {
	file: File | DataTransferItemList;
	code: string;
}

export interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}
