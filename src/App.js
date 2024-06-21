import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer'
import HomePages from "./pages/home/HomePages.jsx";
import NewsPage from "./pages/news/NewsPage.jsx";
import NewsContentPage1 from "./pages/news/NewsContentPage1.jsx";



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePages/>}/>

        {/* News Start */}
        <Route path='/NewsPage' element={<NewsPage/>}/>
        <Route path='/NewsContentPage1' element={<NewsContentPage1/>}/>
        {/* News End */}

      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
