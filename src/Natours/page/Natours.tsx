import '../css/icon-font.css'


export default function Natours() {
    return (
        <>
            <header className="header">

                {/* Logo */}
                <div className="header__logo-box">
                    <img src="/img/logo-white.png" alt="Logo" className='header__logo' />
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

                {/*  About Section */}
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ipsum dolor ducimus quam nisi exercitation
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventures like you never have before
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitation
                            </p>

                            <a href="#" className="btn-text">
                                {/* &rarr; 代表右箭頭 */}
                                Learn more &rarr;
                            </a>

                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src='/img/nat-1-large.jpg' alt="Photo 1" className="composition__photo composition__photo--p1" />
                                <img src='/img/nat-2-large.jpg' alt="Photo 2" className="composition__photo composition__photo--p2" />
                                <img src='/img/nat-3-large.jpg' alt="Photo 3" className="composition__photo composition__photo--p3" />
                            </div>
                        </div>
                    </div>

                </section>


                {/*  Features Section */}
                <section className='section-features'>

                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className='feature-box__icon icon-basic-world'></i>
                                <h3 className="heading-tertiary u-margin-bottom-small"> Explore the world </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ipsum dolor ducimus quam nisi exercitation
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className='feature-box__icon icon-basic-compass'></i>
                                <h3 className="heading-tertiary u-margin-bottom-small"> Meet nature </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ipsum dolor ducimus quam nisi exercitation
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className='feature-box__icon icon-basic-map'></i>
                                <h3 className="heading-tertiary u-margin-bottom-small"> Find your way </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ipsum dolor ducimus quam nisi exercitation
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className='feature-box__icon icon-basic-heart'></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">  Live a healthier life </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ipsum dolor ducimus quam nisi exercitation
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most popular tours
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    Front
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    Back
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            Col 1 of 3
                        </div>
                        <div className="col-1-of-3">
                            Col 1 of 3
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