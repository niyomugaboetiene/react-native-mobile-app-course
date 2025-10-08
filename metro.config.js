// metro.config.js
const {getDefaultConfig} = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve('nativewind/metro');
config.resolver.assetExts.push('css');

module.exports = config;