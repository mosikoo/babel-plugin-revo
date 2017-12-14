import Revo from '../../rpc';

Revo('/pcproj/pcproject/pub/listPcprojByCategory.json')({
  workNo: '',
  nickname: '',
  roles: []
}).then(content => {
  console.log(content.nickname);
});

Revo('/pcproj/pcproject/pub/listPcprojByCategory.json')({
  workNo: '',
  nickname: '',
  roles: []
}).then(content => {
  console.log(content.nickname);
});

console.log(Revo('/alsd.json'));
