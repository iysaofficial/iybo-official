import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer'
import HomePages from "./pages/home/HomePages.jsx";
import NewsPage from "./pages/news/NewsPage.jsx";
import NewsContentPage1 from "./pages/news/NewsContentPage1.jsx";
import ListOfWinnerAllPage from './pages/after event/ListOfWinnerAllPage';
import ListOfWinnerDetail2023Page from './pages/after event/ListOfWinnerDetail2023Page';
import ListOfWinnerDetail2024Page from './pages/after event/ListOfWinnerDetail2024Page';
import ListOfWinnerDetail2025Page from './pages/after event/ListOfWinnerDetail2025Page';
import GalleryComp from './components/GalleryComp';



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

        <Route path="/ListOfWinnerAllPage" element={<ListOfWinnerAllPage/>} />
        <Route path="/ListOfWinnerDetail2023Page" element={<ListOfWinnerDetail2023Page/>} />  
        <Route path="/ListOfWinnerDetail2024Page" element={<ListOfWinnerDetail2024Page/>} />  
        <Route path="/ListOfWinnerDetail2025Page" element={<ListOfWinnerDetail2025Page/>} />  

      </Routes>
    </Router>
    {/* <br></br>
    <br></br>
    <br></br>
    <br></br>
    <GalleryComp></GalleryComp>
    <br></br>
    <br></br>
    <br></br>
    <br></br> */}
    <Footer></Footer>
    </>
  );
}

export default App;
