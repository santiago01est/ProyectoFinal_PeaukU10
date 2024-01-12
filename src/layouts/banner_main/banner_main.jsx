import '../../styles/banner_main.css';
const BannerMain = () => {
    return (
        
        <section id='banner_main' className='my-5 pt-3'>
            <div className="hero-section container p-0">
            <div className="get-started row align-items-center">
                <div className="col">
                    <div className="starter">
                        <div className="starter-title">
                            <h1>Get starter your exciting <span className="text-primary">journey</span> with us</h1>
                        </div>
                        <div className="starter-desription mt-4">
                            <p className="text-secondary">A Team of experienced tourism professionals will provide you with
                                the best advice and tips for your desire place.</p>
                        </div>
                        <button className="btn starter-button mt-5 text-primary">Discover Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="tourist d-flex flex-column align-items-center">
                        <img src="/img/planes.svg" alt="planes" className="img-planes"/>
                        <img src="/img/tourist.png" alt="tourist"
                            className="img-tourist justify-content-center"/>
                        <div className="elipse"></div>
                        <div className="achievements">
                            <div className="trophy achievement-item align-items-center">
                                <img src="/icons/trophy.png" alt="trophy"/>
                                <div className="achievement-text">
                                    <span className="title">Best Tour Awards</span>
                                </div>
                            </div>
                            <div className="google-maps achievement-item align-items-center">
                                <img src="/icons/google maps.png" alt="google-maps"/>
                                <div className="achievement-text">
                                    <span className="title">Explore</span>
                                    <span className="text-secondary-google-maps">Every cornar of the world with us</span>
                                </div>
                            </div>
                            <div className="star achievement-item align-items-center">
                                <img src="/icons/star.png" alt="star"/>
                                <div className="achievement-text">
                                    <span className="title">27K</span>
                                    <span className="text-secondary-star">Customer Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-bar row mt-5">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="location">
                        <h6>Location <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>Where are you going</span>
                    </div>
                    <div className="date">
                        <h6>Date <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>When you will go</span>
                    </div>
                    <div className="guest">
                        <h6>Guest <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>Number of guest</span>
                    </div>
                    <button className="btn explore">Explore Now</button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default BannerMain