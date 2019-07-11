const path = require('path');

module.exports = ({ config }) => {
   
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    config.module.rules.push({
        test: [/\.stories\.js$/, /index\.js$/],
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../src/components')],
        enforce: 'pre',

    });

    config.module.rules.push(
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../"),
        }
    );
    return config;
};
