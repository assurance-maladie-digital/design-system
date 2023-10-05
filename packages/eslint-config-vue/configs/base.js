module.exports = {
	root: true,
	extends: [
	  'plugin:vue/vue3-essential'
	],
	parserOptions: {
	  ecmaVersion: 'latest',
	  parser: '@typescript-eslint/parser'
	},
	rules: {
		// vue3-strongly-recommended
	  'vue/attribute-hyphenation': 'error',
	  'vue/component-definition-name-casing': 'error',
	  'vue/first-attribute-linebreak': 'error',
	  'vue/html-closing-bracket-newline': 'error',
	  'vue/html-closing-bracket-spacing': 'error',
	  'vue/html-end-tags': 'error',
	  'vue/html-indent': ['error', 'tab'],
	  'vue/html-quotes': 'error',
	  'vue/html-self-closing': 'error',
	  'vue/max-attributes-per-line': 'error',
	  'vue/multiline-html-element-content-newline': 'error',
	  'vue/mustache-interpolation-spacing': 'error',
	  'vue/no-multi-spaces': 'error',
	  'vue/no-spaces-around-equal-signs-in-attribute': 'error',
	  'vue/no-template-shadow': 'error',
	  'vue/one-component-per-file': 'error',
	  'vue/prop-name-casing': 'error',
	  'vue/require-default-prop': 'error',
	  'vue/require-explicit-emits': 'error',
	  'vue/require-prop-types': 'error',
	  'vue/singleline-html-element-content-newline': 'error',
	  'vue/v-bind-style': 'error',
	  'vue/v-on-event-hyphenation': 'error',
	  'vue/v-on-style': 'error',
	  'vue/v-slot-style': 'error',
	  // custom
	  "vue/block-lang": ["error",
	  {
		"script": {
		  "lang": "ts"
		},
		"styles": {
		  "lang": "scss"
		}
	  }
	],
	"vue/block-tag-newline": ["error", {
	  "singleline": "always",
	  "multiline": "always",
	  "maxEmptyLines": 0,
	  "blocks": {
		"template": {
		  "singleline": "always",
		  "multiline": "always",
		  "maxEmptyLines": 0,
		},
		"script": {
		  "singleline": "always",
		  "multiline": "always",
		  "maxEmptyLines": 0,
		},
		"styles": {
		  "singleline": "always",
		  "multiline": "always",
		  "maxEmptyLines": 0,
		}
	  },
	}],
	  "vue/component-api-style": ["error",
		["script-setup", "composition", "options"]
	  ],
	  "vue/component-name-in-template-casing": ["error", "PascalCase", {
		"registeredComponentsOnly": false // not sure
	  }],
	  "vue/component-options-name-casing": ["error", "PascalCase"],
	  "vue/custom-event-name-casing": ["error",
		"camelCase"
	  ],
	  "vue/define-emits-declaration": ["error", "type-based"],
	  "vue/define-macros-order": ["error", {
		"order": ["defineProps", "defineEmits"]
	  }],
	  "vue/define-props-declaration": ["error", "type-based"],
	  "vue/html-button-has-type": ["error", {
		"button": true,
		"submit": true,
		"reset": true
	  }],
	  "vue/html-comment-content-newline": ["error",
		{
		  "singleline": "never",
		  "multiline": "always"
		}
	  ],
	  "vue/html-comment-content-spacing": ["error",
		"always"
	  ],
	  "vue/html-comment-indent": ["error", 'tab'],
	  "vue/match-component-file-name": ["error", {
		"extensions": ["ts","vue"],
		"shouldMatchCase": true
	  }],
	  "vue/match-component-import-name": ['error'],
	  "vue/new-line-between-multi-line-property": ["error", {
		"minLineOfMultilineProperty": 2
	  }],
	  "vue/next-tick-style": ["error", "promise"],
	  'vue/no-boolean-default': ['error', 'default-false'],
	  'vue/no-duplicate-attr-inheritance': 'error',
	  'vue/no-empty-component-block': 'error',
	  'vue/no-multiple-objects-in-class': 'error',
	  "vue/no-potential-component-option-typo": ["error", {
		"presets": ["all"],
		"threshold": 5
	  }],
	  'vue/no-ref-object-destructure': 'error',
	  "vue/no-required-prop-with-default": ["error", {
		"autofix": true
	  }],
	  "vue/no-restricted-v-bind": ["error", "/^v-/"],
	  "vue/no-static-inline-styles": ["error", {
		"allowBinding": false
	  }],
	  "vue/no-template-target-blank": ["error", {
		"allowReferrer": false,
		"enforceDynamicLinks": "always"
	  }],
	  'vue/no-this-in-before-route-enter': 'error',
	//   "vue/no-undef-properties": ["error", {
	// 	"ignores": ["/^\\$/"]
	//   }], doesn't work with mixins
	  "vue/no-unsupported-features": ["error", {
		"version": "^3.2.0"
	  }],
	  "vue/no-unused-properties": ["error", {
		"groups": ["props", 'data', 'computed', 'methods', 'setup'],
		"deepData": false,
		"ignorePublicMembers": false
	  }],
	  'vue/no-unused-refs': 'error',
	  "vue/no-useless-mustaches": ["error", {
		"ignoreIncludesComment": false,
		"ignoreStringEscape": false
	  }],
	  "vue/no-useless-v-bind": ["error", {
		"ignoreIncludesComment": false,
		"ignoreStringEscape": false
	  }],
	  "vue/padding-line-between-blocks": ["error", "always"],
	  "vue/padding-line-between-tags": ["error", [
		{ "blankLine": "consistent", "prev": "*", "next": "*" },
	  ]],
	  'vue/prefer-prop-type-boolean-first': 'error',
	  'vue/prefer-separate-static-class': 'error',
	  "vue/prefer-true-attribute-shorthand": ["error", "always"],
	  "vue/require-direct-export": ["error", {
		"disallowFunctionalComponentFunction": false
	  }],
	  // vue/require-emit-validator // not sure,
	//   'vue/require-expose': 'error', // seulement DS ?
	  "vue/script-indent": ["error", 'tab', {
		"baseIndent": 1,
		"switchCase": 1
	  }],
	  "vue/v-for-delimiter-style": ["error", "in"],
	  "vue/v-on-handler-style": ["error",
	  ["method", "inline-function"], // ["method", "inline-function"] | ["method", "inline"] | "inline-function" | "inline"
	  {
		"ignoreIncludesComment": false
	  }
	],
	'vue/array-bracket-newline': ['error', { "multiline": true, "minItems": 2 }],
	'vue/array-bracket-spacing': ['error', 'never'],
	'vue/arrow-spacing': ['error', { "before": true, "after": true }],
	'vue/block-spacing': ['error', 'always'],
	'vue/brace-style': ['error', '1tbs', { "allowSingleLine": true }],
	'vue/comma-dangle': ['error', 'never'],
	'vue/comma-spacing': ['error', { "before": false, "after": true }],
	'vue/comma-style': ['error', 'last'],
	'vue/dot-location': ['error', 'object'],
	'vue/dot-notation': ['error'],
	'vue/eqeqeq': ['error', 'always'],
	'vue/func-call-spacing': ['error', 'never'],
	'vue/key-spacing': ['error', {
	  "beforeColon": false,
	  "afterColon": true,
	  "mode": "strict"
	}],
	'vue/keyword-spacing': ['error', {
	  "before": true,
	  "after": true
	}],
	'vue/max-len': ['error', {
	  "code": 100,
	  "template": 80,
	  "tabWidth": 4,
	  "comments": 80,
	  "ignoreComments": false,
	  "ignoreTrailingComments": false,
	  "ignoreUrls": true,
	  "ignoreStrings": false,
	  "ignoreTemplateLiterals": false,
	  "ignoreRegExpLiterals": false,
	  "ignoreHTMLAttributeValues": false,
	  "ignoreHTMLTextContents": false,
  }],
  'vue/multiline-ternary': ['error', 'never'],
  'vue/no-constant-condition': ['error'],
  'vue/no-empty-pattern': ['error'],
  'vue/no-extra-parens': ['error', 'all'],
  "vue/no-irregular-whitespace": ["error", {
	"skipStrings": false,
	"skipComments": false,
	"skipRegExps": false,
	"skipTemplates": false,
	"skipHTMLAttributeValues": false,
	"skipHTMLTextContents": false
  }],
  'vue/no-loss-of-precision': ['error'],
  'vue/no-sparse-arrays': ['error'],
  'vue/no-useless-concat': ['error'],
  'vue/object-curly-newline': ['error', { "multiline": true , }],
  'vue/object-curly-spacing': ['error', 'always'],
  'vue/object-property-newline': ['error'],
  'vue/object-shorthand': ['error', 'always'],
  'vue/operator-linebreak': ['error', 'after'],
  'vue/prefer-template': ['error'],
  'vue/quote-props': ['error', "as-needed"],
  'vue/space-in-parens': ['error', "never"],
  'vue/space-infix-ops': ['error'],
  'vue/space-unary-ops': ['error'],
  'vue/template-curly-spacing': ['error', 'never'],
	},
   overrides: [
	{
	 files: [
	  'pages/*'
	 ],
	 rules: {
	  'vue/multi-word-component-names': 'off'
	 }
	},
	  {
		"files": ["*.vue"],
		"rules": {
		  "indent": "off"
		}
	  }
   ]
  }
