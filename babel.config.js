module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-export-namespace-from"],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components/index.ts',
          '@constants': './src/constants/index.ts',
          '@pages': './src/pages/index.ts',
          '@services': './src/services/index.ts',
          '@structures': './src/structures/index.ts',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
  ],
};
