module.exports = {
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties", {"loose": true}]
  ]
}

// cnpm i @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D
