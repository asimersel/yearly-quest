module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: ['expo-router/babel'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
