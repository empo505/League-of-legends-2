import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
},
  transform: {
    // Använd vue3-jest för alla .vue-filer
    '^.+\\.vue$': '@vue/vue3-jest',
    // Använd ts-jest för .ts och .tsx filer
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },
  moduleFileExtensions: ['json', 'js', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Tvinga Jest att använda rätt Vue-bundler
    '^vue$': 'vue' 
  },
};
export default config;