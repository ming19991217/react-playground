

import logo from '../img/logo-white.png';


export default function Natours() {
    return (
        <header className="header">

            {/* Logo */}
            <div className="logo-box">
                <img src={logo} alt="Logo" className='logo' />
            </div>

            {/* 標題 */}
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
            </div>


        </header>
    );
}