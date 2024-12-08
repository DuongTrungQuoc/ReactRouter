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

### `Link: Cho phép chuyển đổi giữa các URL khác nhau mà không cần phải load lại trang (tương tự <a> trong HTML)`


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

### `NavLink: Cũng giống Link, nhưng nếu URL trùng với link của NavLink thì sẽ thêm class là active`

### `Navigate: Sử dụng Navigate để tự động chuyển hướng đến một trang nào đó`

