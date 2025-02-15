

import logo from '../img/logo-white.png';


export default function Natours() {
    return (
        <header className="header">

            {/* Logo */}
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className='header__logo' />
            </div>

            {/* 標題 */}
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>

                <a href="#" className="btn btn--white btn--animated">
                    Discover our tours
                </a>
            </div>


        </header>
    );
}