import HeroComp from '../../components/home/HeroComp'
import AboutComp from '../../components/home/AboutComp'
import CategoryComp from '../../components/home/CategoryComp'
import AfterEventComp from '../../components/home/AfterEventComp'
import ContactComp from '../../components/home/ContactComp'
import LogoComp from '../../components/home/LogoComp'

import '../../assets/css/home/Home.css'




const HomePages = () =>{
    return(
        <>
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
