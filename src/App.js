import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from './pages/Error404';
import Blog from "./pages/Blog";
import LayoutDefault from './layout/LayoutDefault';
import BlogNews from './pages/Blog/BlogNews';
import BlogRelated from './pages/Blog/BlogRelated';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />}>
            <Route path='news' element={<BlogNews />} />
            <Route path='related' element={<BlogRelated />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
