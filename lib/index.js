'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ({ types: t }) {
  var a = function () {};
  var a = function (b) {
    return b;
  };
  const arr = [];
  return {
    visitor: {
      Identifier(path, state) {
        const arr = [];
        let replacePath;
        function recursion(path2) {
          const parentPath = path2.parentPath;
          if (parentPath && parentPath.isMemberExpression()) {
            const prop = parentPath.node.property.name;
            arr.push(prop);
            replacePath = parentPath;
            recursion(parentPath);
            return;
          }
          if (!arr.length) {
            return;
          }
          path2.replaceWith(t.callExpression(t.identifier('Revo'), [t.stringLiteral(`/${arr.join('/')}${state.opts.addSuffix ? '.json' : ''}`)]));
          path.stop();
        }
        if (t.isIdentifier(path.node, { name: 'Revo' })) {
          recursion(path);
        }
      }
    }
  };
};
