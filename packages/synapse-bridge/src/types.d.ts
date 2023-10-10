import Vue from "vue";
import { NavigationGuardNext } from "vue-router";

export interface IndexedObject<Type = string> {
	[key: string]: Type;
}

export type Next = NavigationGuardNext<Vue>;

export interface Dimensions {
	width: string;
	height: string;
}
