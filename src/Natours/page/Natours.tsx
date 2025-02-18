

import logo from '../img/logo-white.png';


export default function Natours() {
    return (
        <>
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

            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-8">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            Text content
                        </div>
                        <div className="col-1-of-2">
                            Image component
                        </div>
                    </div>

                </section>
            </main>

            {/* 
            <section className='grid-test'>
                <div className="row">
                    <div className="col-1-of-2">
                        Col 1 of 2
                    </div>
                    <div className="col-1-of-2">
                        Col 1 of 2
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-2-of-3">
                        Col 2 of 3
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        Col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        Col 1 of 4
                    </div>
                    <div className="col-2-of-4">
                        Col 2 of 4
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        Col 1 of 4
                    </div>
                    <div className="col-3-of-4">
                        Col 3 of 4
                    </div>
                </div>

            </section>
            */}
        </>
    );
}