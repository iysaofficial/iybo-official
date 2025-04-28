import React, { useEffect } from 'react';
import $ from 'jquery';

import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // jquery for toggle dropdown menus
        $(document).ready(function(){
            // toggle sub-menus
            $(".sub-btn").click(function(){
                $(this).next(".sub-menu").slideToggle();
            });
            // toggle more-menus
            $(".more-btn").click(function(){
                $(this).next(".more-menu").slideToggle();
            });
        });
        

        // javascript for the responsive navigation menu
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () =>{
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () =>{
            menu.classList.remove("active");
        });
    }, []);
    
    return(
        <>
        <header>
            <a href="/"><img className='logo-nav' src="./assets/images/logo/IYBO.png" alt="" /></a>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><a href="/">Home</a></li>
                    <li className='menu-item'><a href="#about">About</a></li>
                    <li className='menu-item'><a href="https://drive.google.com/file/d/17FZEkYb33M7KDx6iL5PcqhwJ9wtiPIDa/view?usp=sharing" target='_blank'>Guide Book</a></li>
                    {/* <li className='menu-item'><a href="/AboutPage">Kelas</a></li> */}
                    {/* <li className='menu-item'><a href="/#category-section">Category</a></li> */}
                    {/* <li className='menu-item'><a href="/ContactPage">Contact</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/file/d/1jkpeD9EN2kWu059MDmriUHgqil_P31xT/view" target='_blank'>Press Release</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}

                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Media Coverage <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="/NewsPage">News</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1xtNRUdpRV1YpfkqCYINwnbG83y-La-bU/view?usp=sharing" target='_blank'>Press Release 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/18dkpe3f-rHJnmxn4YBWy7EpZjfi5EhJk/view?usp=drive_link" target='_blank'>Press Release 2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1jkpeD9EN2kWu059MDmriUHgqil_P31xT/view" target='_blank'>Press Release 2023</a></li>
                        </ul>
                    </li> */}

                    <li className='menu-item'>
                        <a className='sub-btn' href="/ListOfWinnerAllPage">List of Winner </a>
                        {/* <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1gXgYEasVsKV4SWsq3hbl307qlILE4KBY/view?usp=sharing" target='_blank'>List of Winner 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1H6Sq8RTedOVvFv1en4GuGO20iSmzJizO/view?usp=drive_link" target='_blank'>List of Winner 2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1ooTxpl96PcNtcfNVY0rBNYvT4EDJtw_i/view?usp=drive_link" target='_blank'>List of Winner 2023</a></li>
                        </ul> */}
                    </li>

                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1OtPQULlba4DFS5OeiOUkLvSDELngdHpc?usp=sharing" target='_blank'>Curation 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/1O4S3oK1QCl7mNLrI3vyq5KnuRvWMUbpq" target='_blank'>Curation 2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1ifqMjkd9h2Wzj4VoWA1Z3ylUKGRSD8ue?usp=drive_link" target='_blank'>Curation 2023</a></li>
                        </ul>
                    </li> */}
                    
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Certificate Supervisor <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1vLhW2nU6zY7KoqYhCXUPWuq7GdyPdFqT?usp=sharing" target='_blank'>Certificate Supervisor 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/1E_Z5ecDyXWQ2REa8GGTuxL8GXzwgzb9E" target='_blank'>Certificate Supervisor 2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/14YH4DDJp88MjeEI0pDst82Bf_BymNZbg" target='_blank'>Certificate Supervisor 2023</a></li>
                        </ul>
                    </li>

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Gallery <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1UuGC30v3b9rhjYON-dP_1nz1NYdBrQhI?usp=sharing" target='_blank'>2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1otO678XWKJeyTUa9nEpsqGgGMzK2Mcq9?usp=sharing" target='_blank'>2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1tDzGqeV_WAxeCoTJmlp97FSzDYeoOoC8" target='_blank'>2023</a></li>                            
                        </ul>
                    </li>




                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                      <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp