### babel-plugin-revo

```jsx
import Revo from '../../rpc';

Revo.pcproj.pcproject.pub.listPcprojByCategory({
  workNo: '',
  nickname: '',
  roles: []
}).then((content) => {
  console.log(content.nickname);
});

// ===> babel 之后转换成

Revo('/pcproj/pcproject/pub/listPcprojByCategory.json')({
  workNo: '',
  nickname: '',
  roles: []
}).then((content) => {
  console.log(content.nickname);
});
```
