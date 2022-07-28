interface InputFacadeEventTarget extends EventTarget {
	unmaskedValue: string;
}

export interface InputFacadeEvent extends Event {
	target: InputFacadeEventTarget;
}
