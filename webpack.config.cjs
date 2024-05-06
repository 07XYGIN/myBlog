const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.join(__dirname, 'dists'),
    filename: 'app.js'
  }
};
