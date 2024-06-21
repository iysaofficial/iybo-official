import '../../assets/css/home/Home.css'

import HeroComp from '../../components/home/HeroComp'
import AboutComp from '../../components/home/AboutComp'
import CategoryComp from '../../components/home/CategoryComp'
import AfterEventComp from '../../components/home/AfterEventComp'
import ContactComp from '../../components/home/ContactComp'
import LogoComp from '../../components/home/LogoComp'





const HomePages = () =>{
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <LogoComp/>
        </>
    )
}

export default HomePages
