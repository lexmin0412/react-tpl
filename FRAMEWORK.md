# react-tpl

react项目模板


参考：

https://create-react-app.dev/docs/adding-a-sass-stylesheet

- [支持typescript](https://create-react-app.dev/docs/adding-typescript/)
- [支持scss](https://create-react-app.dev/docs/adding-a-sass-stylesheet)

[添加router](https://create-react-app.dev/docs/adding-a-router)

```
npm install --save react-router-dom
npm install --save @types/react-router-dom -S -D
```

[页面跳转](https://reactrouter.com/web/api/Hooks/usehistory)

```jsx
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

环境变量配置

在根目录下创建.env开头的文件, 注意变量必须以 REACT_APP_ 开头

```bash
# .env
REACT_APP_API_BASE=https://github.com/lexmin0412
```

在src下js文件中可通过 `process.env.REACT_APP_API_BASE` 来读取

配置不同环境的变量：

安装 env-cmd
```
npm i env-cmd -D
```

指定使用的配置文件：

```json
// package.json
"start:test": "env-cmd -f ./.env.test npm run start",
```

这样读取到的就是 .env.test 下的配置了。

