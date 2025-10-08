const {getDefaultConfig} = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

// NativeWind configuration
config.transformer.babelTransformerPath = require.resolve('nativewind/metro');

// Asset extensions for CSS
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'css');
config.resolver.sourceExts.push('css');

module.exports = config;