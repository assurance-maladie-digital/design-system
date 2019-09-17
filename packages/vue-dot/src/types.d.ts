import Vue from 'vue';

// Export generic type
export type Refs<T extends object> = Vue['$refs'] & T;
