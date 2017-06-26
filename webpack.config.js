module.exports = {
    devtool: 'inline-source-maps',
    entry: ['./client/client.js'],
    output: {
        path:__dirname + "/dist",
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /nodule_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}