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
                    <div className="gallery">
                        <figure className="gallery__item">
                            <img src="/trillo_img/hotel-1.jpg" alt="Photo of hotel 1" className="gallery__photo" />
                        </figure>
                        <figure className="gallery__item">
                            <img src="/trillo_img/hotel-2.jpg" alt="Photo of hotel 2" className="gallery__photo" />
                        </figure>
                        <figure className="gallery__item">
                            <img src="/trillo_img/hotel-3.jpg" alt="Photo of hotel 3" className="gallery__photo" />
                        </figure>
                    </div>

                    <div className="overview">
                        <h1 className="overview__heading">
                            Hotel Las Palmas
                        </h1>
                        <div className="overview__stars">
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-star" />
                            </svg>
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-star" />
                            </svg>
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-star" />
                            </svg>
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-star" />
                            </svg>
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-star" />
                            </svg>
                        </div>

                        <div className="overview__location">
                            <svg className="overview__icon-star">
                                <use xlinkHref="/trillo_img/sprite.svg#icon-location-pin" />
                            </svg>
                            <button className="btn-inline">
                                Albufeira, Portugal
                            </button>
                        </div>

                        <div className="overview__rating">
                            <div className="overview__rating-average">8.6</div>
                            <div className="overview__rating-count">429 votes</div>
                        </div>
                    </div>
                </main>
            </div>

        </div>

    )
}

export default Trillo
