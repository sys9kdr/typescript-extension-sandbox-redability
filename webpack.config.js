const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                include: path.resolve(__dirname,'src'),
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                include: path.resolve(__dirname,'node_modules'),
                test: /\.node$/,
                use: 'node-loader'
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
};
