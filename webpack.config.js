
const exclude = require('exclude-node');

const js = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
};

const config = {
    entry: ['regenerator-runtime/runtime', './src/index'],
    target: 'node',
    output: { path: __dirname + '/dist', filename: 'index.js' },
    module: { rules: [js] },
    stats: { children: false },
    externals: exclude
};

module.exports = [config];
