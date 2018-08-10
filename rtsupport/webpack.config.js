module.exports = {
    mode: "development",
    entry: "./index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.jsx$/, exclude: /node_modules/, use: {loader: "babel-loader"}}
        ]
    }
}