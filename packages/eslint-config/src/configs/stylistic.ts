import { type FlatESLintConfigItem } from 'eslint-define-config'
import { pluginAntfu, pluginStylistic } from '../plugins'

export const stylistic: FlatESLintConfigItem[] = [
	{
		plugins: {
			antfu: pluginAntfu,
			style: pluginStylistic,
		},
		rules: {
			'antfu/consistent-list-newline': 'error',
			'antfu/top-level-function': 'error',

			'curly': ['error', 'all'],

			'style/array-bracket-spacing': ['error', 'never'],
			'style/arrow-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],
			'style/block-spacing': ['error', 'always'],
			'style/brace-style': [
				'error',
				'1tbs',
				{
					allowSingleLine: false,
				},
			],
			'style/comma-dangle': ['error', 'always-multiline'],
			'style/comma-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'style/comma-style': ['error', 'last'],
			'style/computed-property-spacing': [
				'error',
				'never',
				{
					enforceForClassMembers: true,
				},
			],
			'style/dot-location': ['error', 'property'],
			'style/eol-last': ['error', 'always'],
			'style/func-call-spacing': ['error', 'never'],
			'style/function-call-argument-newline': ['error', 'consistent'],
			'style/function-paren-newline': ['error', 'multiline'],
			'generator-star-spacing': [
				'error',
				{
					before: true,
					after: false,
				},
			],
			'style/implicit-arrow-linebreak': ['error', 'beside'],
			'style/indent': [
				'error',
				'tab',
				{
					SwitchCase: 1,
					VariableDeclarator: 1,
					outerIIFEBody: 1,
					MemberExpression: 1,
					FunctionDeclaration: {
						body: 1,
						parameters: 1,
					},
					FunctionExpression: {
						body: 1,
						parameters: 1,
					},
					StaticBlock: {
						body: 1,
					},
					CallExpression: {
						arguments: 1,
					},
					ArrayExpression: 1,
					ObjectExpression: 1,
					ImportDeclaration: 1,
					flatTernaryExpressions: false,
					offsetTernaryExpressions: true,
					ignoreComments: false,
					ignoredNodes: [
						'TemplateLiteral *',
						'TSTypeParameterInstantiation',
						'FunctionExpression > .params[decorators.length > 0]',
						'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
						'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
					],
				},
			],
			'style/key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true,
				},
			],
			'style/keyword-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],
			'style/linebreak-style': ['error', 'unix'],
			'style/lines-around-comment': [
				'error',
				{
					beforeBlockComment: true,
					allowBlockStart: true,
					allowObjectStart: true,
					allowArrayStart: true,
				},
			],
			'style/lines-between-class-members': [
				'error',
				'always',
				{
					exceptAfterSingleLine: true,
				},
			],
			'style/max-len': [
				'error',
				{
					code: 120,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],
			'style/max-statements-per-line': [
				'error',
				{
					max: 1,
				},
			],
			'style/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'none',
					},
				},
			],
			'style/multiline-ternary': ['error', 'always-multiline'],
			'style/new-parens': ['error', 'always'],
			'style/newline-per-chained-call': [
				'error',
				{
					ignoreChainWithDepth: 2,
				},
			],
			'no-confusing-arrow': [
				'error',
				{
					allowParens: true,
					onlyOneSimpleParam: false,
				},
			],
			'style/no-extra-parens': [
				'error',
				'all',
				{
					nestedBinaryExpressions: false,
					ignoreJSX: 'multi-line',
					enforceForArrowConditionals: false,
				},
			],
			'style/no-extra-semi': 'error',
			'style/no-floating-decimal': 'error',
			'style/no-mixed-operators': [
				'error',
				{
					allowSamePrecedence: true,
					groups: [
						[
							'==',
							'!=',
							'===',
							'!==',
							'>',
							'>=',
							'<',
							'<=',
						],
						['&&', '||'],
						['in', 'instanceof'],
					],
				},
			],
			'style/no-mixed-spaces-and-tabs': 'error',
			'style/no-multi-spaces': 'error',
			'style/no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 0,
				},
			],
			'style/no-spaced-func': 'error',
			'style/no-tabs': 'off',
			'style/no-trailing-spaces': 'error',
			'style/no-whitespace-before-property': 'error',
			'style/nonblock-statement-body-position': ['error', 'below'],
			'style/object-curly-spacing': ['error', 'always'],
			'style/one-var-declaration-per-line': 'off',
			'style/operator-linebreak': ['error', 'after'],
			'style/padded-blocks': ['error', 'never'],
			'style/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: 'return',
				},
				{
					blankLine: 'always',
					prev: [
						'const',
						'let',
						'var',
					],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: [
						'const',
						'let',
						'var',
					],
					next: [
						'const',
						'let',
						'var',
					],
				},
				{
					blankLine: 'always',
					prev: ['case', 'default'],
					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',
					next: ['interface', 'type'],
				},
			],
			'style/quote-props': ['error', 'consistent-as-needed'],
			'style/quotes': [
				'error',
				'single',
				{
					avoidEscape: false,
					allowTemplateLiterals: false,
				},
			],
			'style/rest-spread-spacing': ['error', 'never'],
			'style/semi': ['error', 'never'],
			'style/semi-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'style/semi-style': ['error', 'last'],
			'style/space-before-blocks': ['error', 'always'],
			'style/space-before-function-paren': ['error', 'never'],
			'style/space-in-parens': ['error', 'never'],
			'style/space-infix-ops': 'error',
			'style/space-unary-ops': [
				'error',
				{
					words: true,
					nonwords: false,
				},
			],

			'style/spaced-comment': [
				'error',
				'always',
				{
					block: {
						balanced: true,
						markers: ['!'],
					},
					line: {
						markers: ['/'],
					},
				},
			],
			'style/switch-colon-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'style/template-curly-spacing': ['error', 'never'],
			'style/template-tag-spacing': ['error', 'never'],
			'style/type-annotation-spacing': [
				'error',
				{
					before: false,
					after: true,
					overrides: {
						arrow: {
							before: true,
							after: true,
						},
					},
				},
			],
			'style/wrap-iife': [
				'error',
				'inside',
				{
					functionPrototypeMethods: true,
				},
			],
			'style/wrap-regex': 'error',
			'style/yield-star-spacing': ['error', 'both'],
		},
	},
]
