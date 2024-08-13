// webpack.config.js

const path = require('path');

module.exports = {
    // Entry point for your application
    entry: './src/index.js',
    
    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    // Module rules for loaders, etc.
    module: {
        rules: [
            // Add your loaders (like Babel, CSS, etc.) here
        ]
    },

    // Resolve fallbacks for Node.js core modules
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "zlib": require.resolve("browserify-zlib"),
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
        }
    },

    // Other configurations like plugins, etc.
    plugins: [
        // Add any plugins you might be using
    ]
};
