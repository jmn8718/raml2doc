module.exports = {
    entry: "./webapp/app-client.js",
    output: {
        filename: "public/javascripts/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|app-server.js)/,
                loader: 'babel'
            }
        ]
    }
};