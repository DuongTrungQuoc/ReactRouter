# React Router

React Router là một thư viện được viết bằng React để quản lý routing trong các ứng dụng web.

## Cài đặt

npm i react-router-dom

### `BrowserRouter`

- Trong file **src/index.js**

```
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
### `Routes, Route`

- Trong file **src/App.js**

```
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}
```

### `Link: `Cho phép chuyển đổi giữa các URL khác nhau mà không cần phải load lại trang (tương tự <a> trong HTML)


- Trong file **src/layout/LayoutDefault/index.js**

```
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/contact">Contact</Link>
  </li>
</ul>
```

### `Outlet: dùng để xác định vị trí mà component trong route được hiển thị`

- Trong file **src/App.js**

```
<Routes>
  <Route path='/' element={<LayoutDefault />}>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Error404 />} />
  </Route>
</Routes>
```

- Trong file **src/layout/LayoutDefault/index.js**

```
<main className="layout-default__main">
  <Outlet />
</main>
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
