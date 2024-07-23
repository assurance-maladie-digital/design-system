import type { ErrorCodes } from './errorCodes';

export interface ErrorEvent {
  file: File | DataTransferItemList
  code: ErrorCodes
}

export interface ErrorCodesType {
  [key: string]: string
}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
