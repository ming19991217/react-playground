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
                        <img src="/trillo_img/SVG/bookmark.svg" alt="bookmark" className="user-nav__icon" />
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <img src="/trillo_img/SVG/chat.svg" alt="chat" className="user-nav__icon" />
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
                    Navigation
                </nav>

                <main className="hotel-view">
                    Hotel View
                </main>
            </div>

        </div>

    )
}

export default Trillo
