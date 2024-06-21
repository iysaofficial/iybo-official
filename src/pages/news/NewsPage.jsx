import '../../assets/css/Header.css'
import HeaderComp from "../../components/HeaderComp"
import '../../assets/css/news/NewsCard.css' 
import NewsCardComp from "../../components/news/NewsCardComp"


const NewsPages = () =>{
    return(
        <>
        <br />
        <br />
        <br />
        <HeaderComp header="News Page"></HeaderComp>
        <NewsCardComp></NewsCardComp>
        </>
    )
}

export default NewsPages