import { RawLocation } from 'vue-router';

export type Next = (to?: RawLocation | false | ((vm: V) => any) | void) => void;