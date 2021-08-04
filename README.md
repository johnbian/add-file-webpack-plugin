## 介绍
webpack plugin 基于htmlwebpackplugin，加入插入文件脚本。

## 用法
```
yarn add add-file-webpack-plugin
```
## webpack
```js
  const AddFileWebpackPlugin = require('add-file-webpack-plugin');

  config.plugins.push(new AddFileWebpackPlugin({
      paths: [
        { type: 'js', url: `${process.env.VUE_APP_STATIC_PATH}/test.js`},
        { type: 'css', url: `${process.env.VUE_APP_STATIC_PATH}/test.css`}
      ]
    }));
```