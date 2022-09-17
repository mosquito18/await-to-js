# await-to-js

## 使用

```
import to from 'await-to-js';

async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found');
}
```


## 学习的知识点
1. 错误（Error）与异常(Exception)的区别
错误 Error：是代码在编译的时候就出现了错误，代码无法编译，比如语法错误，必须修正错误后才能重新编译。代码无法跳过错误。
异常Exception：是代码再运行的时候，出现了错误，比如对象中某个属性不存在，或者是数据类型不对。代码可以继续执行，不过会在控制台中输出一段错误，提醒程序员。

通常所说的错误处理，基本上指的是第二种Exception的情况，用try catch 或者onerror来进行捕获。

2. `try...catch`和`Promise.catch`捕捉错误的区别
https://blog.csdn.net/harmsworth2016/article/details/125471841

3. rollup 多模块化打包

rollup.config.js
```
    output: [
        { file: pkg.main, name: camelCase(libraryName), format: "umd" },
        { file: pkg.module, format: "es" }
    ],
```

package.json
```
  "main": "dist/await-to-js.umd.js",
  "module": "dist/await-to-js.es5.js",

```