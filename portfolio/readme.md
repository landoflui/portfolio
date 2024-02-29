
# Land of Lui
    /\_/\  
   ( o.o ) 
    > ^ <

```bash

#!/bin/bash

# Initialize a new npm project
npm init -y

# Install React and ReactDOM
npm install react react-dom

# Install Webpack, Webpack CLI, and Webpack Dev Server
npm install --save-dev webpack webpack-cli webpack-dev-server

# Install Babel Loader, Core, and Presets
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

# Install ESLint
npm install --save-dev eslint eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks

# Install Three.js
npm install three

# Install GSAP for animations
npm install gsap

# Install Sass
npm install --save-dev sass

# Create directories
mkdir -p src/components src/assets src/styles

# Create entry files
echo "import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
" > src/index.js

echo "import React from 'react';

const App = () => {
  return <div>Hello from LandofLui</div>;
};

export default App;
" > src/components/App.js

echo "body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
" > src/styles/main.scss

# Create HTML file
mkdir public
echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>LandofLui</title>
</head>
<body>
    <div id='root'></div>
</body>
</html>
" > public/index.html

# Webpack Configuration
echo "const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true
  }
};
" > webpack.config.js

# Babel Configuration
echo "{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
" > .babelrc

# ESLint Configuration
echo "{
  "extends": ["airbnb", "plugin:react/recommended"],
  "plugins": ["react", "jsx-a11y", "import"],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off"
  }
}
" > .eslintrc.json

# Install Webpack plugins
npm install --save-dev html-webpack-plugin style-loader css-loader sass-loader

# .gitignore file
echo "/node_modules
/dist
.DS_Store
" > .gitignore

echo "Project setup is complete. Run 'npm start' to begin development."

```
