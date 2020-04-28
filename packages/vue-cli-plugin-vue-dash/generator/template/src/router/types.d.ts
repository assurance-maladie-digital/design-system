import Vue from 'vue';
import { RawLocation } from 'vue-router';

export type Next = (to?: RawLocation | false | ((vm: Vue) => any) | void) => void;
