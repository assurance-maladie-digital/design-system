export = {
    rules:{
    "@typescript-eslint/no-explicit-any": 'error',
     // Return types
     '@typescript-eslint/explicit-function-return-type': ['error', {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true
    }],
    }
}