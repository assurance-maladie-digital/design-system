import Vue from 'vue';

/**
 * Extends refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType;
 * }>;
 */
export type Refs<T extends object> = Vue['$refs'] & T;
