export ={
    extends: [
        './lint-parser',
        'plugin:vue/recommended',
        '@vue/typescript/recommended',
        'plugin:jsdoc/recommended'
      ],
      overrides: [
        {
          files: ['*.vue'],
          rules: {
            // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
            // does not work with type definitions
            'no-unused-vars': 'off'
          }
        },
        {
          files: ['*.js'],
          rules: {
            '@typescript-eslint/no-var-requires': 'off'
          }
        }
      ],
      plugins: [
        'jsdoc'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
}