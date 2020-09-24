module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // skip type checking for speed
                            transpileOnly: false
                        }
                    }
                ]
            }
        ]
    }
}
