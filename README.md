# babel-plugin-revo

## Installation

```sh
npm install babel-plugin-revo
```

## Usage

### Via `.babelrc`

#### .babelrc

```json
{
  "plugins": ["revo"]
}
```

## Example

this following JS:

```js
import Revo from '../../rpc';

Revo.pcproj.pcproject.pub.listPcprojByCategory({
  workNo: '',
  nickname: '',
  roles: []
}).then((content) => {
  console.log(content.nickname);
});
```
will be compiled to

```js
Revo('/pcproj/pcproject/pub/listPcprojByCategory.json')({
  workNo: '',
  nickname: '',
  roles: []
}).then((content) => {
  console.log(content.nickname);
});
```

详情教学可参考[这里](https://github.com/mosikoo/blog/issues/6)
