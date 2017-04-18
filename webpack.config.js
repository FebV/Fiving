module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    devServer: {
        host: '0.0.0.0',
    }
}