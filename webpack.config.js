const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "src") + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "main.js",
        chunkFilename: "[id].js"
    },
    devtool: "cheap-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(json|ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.(css)$/,
                use: [
                    require.resolve("style-loader"),
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 1,
                            modules: false,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: require.resolve("url-loader"),
                options: {
                    limit: 8000,
                    name: "[name].[hash:8].[ext]"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: true
    }
};

