const path = require('path');

module.exports = {
    stories: ["../src/**/*.stories.js"],
    addons: [
      "@storybook/preset-create-react-app",
      "@storybook/addon-actions/register",
      "@storybook/addon-links",
    ],
    webpackFinal: async (config, { configType }) => {
     // had to add this in order to compile css file
      config.module.rules.push({
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      });
      return config;
    },
  };