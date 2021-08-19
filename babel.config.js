module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components/index.ts',
          '@constants': './src/constants/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@pages': './src/pages/index.ts',
          '@field-schemas': './src/field-schemas/index.ts',
          '@services': './src/services/index.ts',
          '@stores': './src/stores',
          '@structures': './src/structures/index.ts',
          '@styles': './src/styles/index.ts',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
  ],
};
