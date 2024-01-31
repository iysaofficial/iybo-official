import '../assets/css/Navbar.css'

const Navbar = () => {
    return(
        <>
        <header>
        <nav>
            <div className='logo'><img src="./assets/images/IYBO.png" alt="" /></div>
            <label htmlFor="btn" className='icon'>
                <span className='fa fa-bars'></span>
            </label>
            <input type="checkbox" id='btn'/>
            <ul>
                <li><a href="/">Home</a></li>
                {/* Dropdown 1 */}
                {/* <li>
                    <label htmlFor="btn-1" className='show'>Features +</label>
                    <a href="#">Features</a>
                    <input type="checkbox" id='btn-1'/>
                    <ul>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Elements</a></li>
                        <li><a href="#">Icons</a></li>
                    </ul>
                </li> */}

                {/* Dropdown 2 */}
                {/* <li>
                    <label htmlFor="btn-2" className='show'>Services +</label>
                    <a href="#">Services</a>
                    <input type="checkbox" id='btn-2'/>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Design</a></li>
                        <li>
                            <label htmlFor="btn-3" className='show'>More</label>
                            <a href="#">More
                                <span className='fa fa-plus'></span>
                            </a>
                            <input type="checkbox" id='btn-3'/>
                            <ul>
                                <li><a href="#">Submenu-1</a></li>
                                <li><a href="#">Submenu-2</a></li>
                                <li><a href="#">Submenu-3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                <li><a href="#about">About</a></li>
                <li><a href="https://drive.google.com/file/d/1LBgLyXFv8SDJiZgaKl-2qxLDYs5T2LI8/view?usp=drive_link" target='_blank'>Guide Book</a></li>
                <li>
                    <label htmlFor="btn-1" className='show'>Gallery</label>
                    <a href="#">Gallery</a>
                    <input type="checkbox" id='btn-1'/>
                    <ul>
                        <li><a href="https://drive.google.com/drive/folders/1tDzGqeV_WAxeCoTJmlp97FSzDYeoOoC8">2023</a></li>
                        {/* <li><a href="#">Elements</a></li>
                        <li><a href="#">Icons</a></li> */}
                    </ul>
                </li>
                <li><a href="#category">Category</a></li>  
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
        </>
        
    )
}

export default Navbar