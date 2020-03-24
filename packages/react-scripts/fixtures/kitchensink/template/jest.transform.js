const babelOptions = { presets: ['@duplotech/babel-preset-react-app'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
