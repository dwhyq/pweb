import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import Notfound from "./pages/ErrorPage/404";
import Project from "./pages/Project/Projects";
import Article from "./pages/Article/Articles";
import ReadArticle from "./pages/Article/ReadArticles";
import { Route, Routes } from "react-router-dom";

const App = () => {
return (
  <div className="App bg-gray-900 text-gray-100 font-sans">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/articles' element={<Article/>}/>
      <Route path='/article/:slug' element={<ReadArticle/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </div>
);
}
export default App;