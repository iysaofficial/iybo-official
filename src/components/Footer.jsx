import '../assets/css/Footer.css'

const Footer = () => {
    return(
        <>
        <footer>
        <div className="content">
            <div className="top">
                <div className="logo-details">
                    <i><img src="./assets/images/IYBO.png" alt="IYBO"/></i>
                </div>
                <div className="media-icons">
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/iysa_official/?hl=id" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target="_blank"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>  
            </div>   
            <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">IYBO</li>
                        <li><p>An event for the achievement of talented young academics from various countries around the world in solving global problems</p></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Information Link</li>
                        <li><a href="#">Registration</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://iysa.or.id" target="_blank">Our Main Website</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Office</li>
                        <li><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</a></li>
                        <li><a href='mailto:youngscientist.iysa@gmail.com' target='_blank' className="">youngscientist.iysa@gmail.com</a></li>
                        <li><a href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</a></li>
                    </ul>
                    <ul className="box input-box">
                        <form action="https://formspree.io/f/xeqbelvo" method="POST">
                            <li className="link_name">Newsletter</li>
                            <li><input type="email" placeholder="Enter Your Email"/></li>
                            <li><input type="submit" value={"Subscribe"}/></li>
                        </form>
                    </ul>
                </div>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <a href="#">IYBO Official.</a>All rights reserved</span>
                <span className="policy_terms">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Condition</a>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer