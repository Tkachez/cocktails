module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": 'babel-jest',
    ".*\\.vue$": 'vue-jest',
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^tests/(.*)$": '<rootDir>/tests/$1',
    "^vuetify/lib$": "vuetify",
  },
  modulePaths: [
    "<rootDir>/src",
    "<rootDir>/node_modules"
  ],
}
