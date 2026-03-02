import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  // VIKTIGT: Flytta ut denna till roten
  extensionsToTreatAsEsm: ['.ts'], 
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleFileExtensions: ['json', 'js', 'ts', 'vue'],
moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Denna rad tvingar Jest att se .vue-filer som giltiga moduler
    '^.+\\.vue$': '@vue/vue3-jest',
  },
};

export default config;