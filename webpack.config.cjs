const path = require('path');

module.exports = {
  //配置入口
  entry: './src/main.tsx',
  //配置出口
  output: {
    path: path.join(__dirname, 'dists'),
    filename: 'app.js'
  }
};
