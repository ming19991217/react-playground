import './styles/main.css'

function Trillo() {

    return (
        <div className="container">
            <header className="header">
                <img src="/trillo_img/logo.png" alt="trillo logo" className="logo" />

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder='Search hotels' />
                    <button className="search__button">
                        <img src="/trillo_img/SVG/magnifying-glass.svg" alt="magnifying-glass" className="search__icon" />
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon" >
                            <use xlinkHref="/trillo_img/sprite.svg#icon-bookmark" />
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon" >
                            <use xlinkHref="/trillo_img/sprite.svg#icon-chat" />
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__user">
                        <img src="/trillo_img/user.jpg" alt="User photo" className="user-nav__user-photo" />
                        <span className="user-nav__user-name">Jonas</span>
                    </div>

                </nav>
            </header>

            <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item side-nav__item--active">
                            <a href="" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="/trillo_img/sprite.svg#icon-home" />
                                </svg>
                                <span>Hotel</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="/trillo_img/sprite.svg#icon-aircraft-take-off" />
                                </svg>
                                <span>Flight</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="/trillo_img/sprite.svg#icon-key" />
                                </svg>
                                <span>Car rental</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="/trillo_img/sprite.svg#icon-map" />
                                </svg>
                                <span>Tours</span>
                            </a>
                        </li>
                    </ul>

                    <div className="legal">
                        &copy; 2021 by trillo. All rights reserved.
                    </div>
                </nav>

                <main className="hotel-view">
                    Hotel View
                </main>
            </div>

        </div>

    )
}

export default Trillo
