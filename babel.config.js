/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
      ],
    },
    development: {
      plugins: [
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
      ],
    },
  },
};
