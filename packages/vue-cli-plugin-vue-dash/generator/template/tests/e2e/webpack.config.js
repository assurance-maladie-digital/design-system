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
                            // skip typechecking for speed
                            transpileOnly: false
                        }
                    }
                ]
            }
        ]
    }
}
