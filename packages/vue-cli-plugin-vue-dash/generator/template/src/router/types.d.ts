import { RawLocation } from 'vue-router';
import Vue from 'vue';

export type Next = (to?: RawLocation | false | ((vm: Vue) => any) | void) => void;
