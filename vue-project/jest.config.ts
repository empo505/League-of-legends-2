import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
},
  transform: {
  '^.+\\.tsx?$': ['ts-jest', { 
    tsconfig: 'tsconfig.json',
    isolatedModules: true, // Detta gör att TS-jest inte stoppar bygget för saknade moduler
    useESM: true
  }],
  '^.+\\.vue$': '@vue/vue3-jest',
},

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/test/__mocks__/fileMock.js',
  },

  testMatch: ['<rootDir>/src/test/**/*.spec.(ts|tsx|js)'],

  transformIgnorePatterns: ['/node_modules/'],

  collectCoverageFrom: ['src/**/*.{ts,vue}', '!src/main.ts'],
};

export default config;