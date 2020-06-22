import vueDefaultRules from './lib/rules/vue-default-rules';
import tsDefaultRules from './lib/rules/typescript-default-rules';

export = {
  configs:{
     vueRecommended:{
      env: {
        node: true
      },
      extends: [
        './lib/bases/vue-plugin-override',
        './lib/rules/normal-rules',
      ],
      rules: vueDefaultRules,
     },
     vueAdvanced:{
      env: {
        node: true
      },
      extends: [
        './lib/bases/vue-plugin-override',
        './lib/rules/advanced-rules',
      ],
      rules: vueDefaultRules,
     },
     tsRecommended: {
      env: {
        node: true,
        es6: true,
        jest: true
      },
      extends: [
        './lib/bases/ts-plugin-override'
      ],
      rules: tsDefaultRules,
     },
     tsAdvanced: {
      env: {
        node: true,
        es6: true,
        jest: true
      },
      extends: [
        './lib/bases/ts-plugin-override',
        './lib/rules/advanced-rules'
      ],
      rules: tsDefaultRules,
     }
  },
};