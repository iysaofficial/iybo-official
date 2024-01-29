import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoComp = () =>{
    return(
        <>
        <section className="brand-logo-section">
        <div className="brand-logo-container">
            <h1>Organized By</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <img src="./assets/images/LogoIYSA.webp" alt=""/>
                    </li>
                    <li>
                        <img src="./assets/images/LOGOAKTUARIA.png" alt=""/>
                    </li>
                </ul>
            </div>
            <br/>
            <h1>Supported By</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <img src="./assets/images/logocpeka.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
        </section>
        </>
    )
}

export default LogoComp