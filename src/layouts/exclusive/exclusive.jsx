import '../../styles/exclusive.css';
const Exclusive = () => {
    return (
        <section className="exclusive-section container-fluid p-0">
            <div className="deals row p-0 ">
                <div className="col">
                    <div className="content d-flex flex-column align-items-center">
                        <div className="title-text d-flex flex-column align-items-center">
                            <h2 className="title">Exclusive <span className="text-primary">deals & discounts</span></h2>
                            <span className="text mt-3 text-center">Discover our fantastic early booking discounts & start
                                planning your journey.</span>
                        </div>
                        <div className="cards d-flex mt-5">
                            <div className="card">
                                <button className="btn d-none">Book Now</button>
                                <img src="/img/imgcard04.png" className="card-img-top  rounded" />
                                <div className="card-body">
                                    <div className="city-calification d-flex justify-content-between mt-2">
                                        <h4 className="city m-0">Madrid</h4>
                                        <div className="calification d-flex align-items-center icon-img">
                                            <img src="/icons/star.png" />
                                            <span className="px-2">4.8</span>
                                        </div>

                                    </div>
                                    <div className="ubication-price d-flex justify-content-between align-items-center mt-3">
                                        <div className="ubication d-flex align-items-center icon-img">
                                            <img src="/icons/ubication.svg" />
                                            <span className="px-2">Spain</span>
                                        </div>
                                        <div className="price d-flex d-flex align-items-center">
                                            <span className="real text-decoration-line-through pe-3">$950</span>
                                            <span className="discount text-primary text-center">$850</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <button className="btn d-none">Book Now</button>
                                <img src="/img/imgcard02.png" className="card-img-top  rounded" />
                                <div className="card-body">
                                    <div className="city-calification d-flex justify-content-between mt-2">
                                        <h4 className="city m-0">Firenze</h4>
                                        <div className="calification d-flex align-items-center icon-img">
                                            <img src="/icons/star.png" />
                                            <span className="px-2">4.5</span>
                                        </div>

                                    </div>
                                    <div className="ubication-price d-flex justify-content-between align-items-center mt-3">
                                        <div className="ubication d-flex align-items-center icon-img">
                                            <img src="/icons/ubication.svg" />
                                            <span className="px-2">Italy</span>
                                        </div>
                                        <div className="price d-flex d-flex align-items-center">
                                            <span className="real text-decoration-line-through pe-3">$850</span>
                                            <span className="discount text-primary text-center">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <button className="btn d-none">Book Now</button>
                                <img src="/img/imgcard01.png" className="card-img-top  rounded" />
                                <div className="card-body">
                                    <div className="city-calification d-flex justify-content-between mt-2">
                                        <h4 className="city m-0">Paris</h4>
                                        <div className="calification d-flex align-items-center icon-img">
                                            <img src="/icons/star.png" />
                                            <span className="px-2">4.4</span>
                                        </div>

                                    </div>
                                    <div className="ubication-price d-flex justify-content-between align-items-center mt-3">
                                        <div className="ubication d-flex align-items-center icon-img">
                                            <img src="/icons/ubication.svg" />
                                            <span className="px-2">France</span>
                                        </div>
                                        <div className="price d-flex d-flex align-items-center">
                                            <span className="real text-decoration-line-through pe-3">$699</span>
                                            <span className="discount text-primary text-center">$599</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <button className="btn d-none">Book Now</button>
                                <img src="/img/imgcard03.png" className="card-img-top  rounded" />
                                <div className="card-body">
                                    <div className="city-calification d-flex justify-content-between mt-2">
                                        <h4 className="city m-0">London</h4>
                                        <div className="calification d-flex align-items-center icon-img">
                                            <img src="/icons/star.png" />
                                            <span className="px-2">4.8</span>
                                        </div>

                                    </div>
                                    <div className="ubication-price d-flex justify-content-between align-items-center mt-3">
                                        <div className="ubication d-flex align-items-center icon-img">
                                            <img src="/icons/ubication.svg" />
                                            <span className="px-2">UK</span>
                                        </div>
                                        <div className="price d-flex d-flex align-items-center">
                                            <span className="real text-decoration-line-through pe-3">$850</span>
                                            <span className="discount text-primary text-center">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-center mt-5">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-circle btn-white mx-1">
                                        <img src="/icons/flecha_izq.svg" alt="flecha izquierda"></img>
                                    </button>
                                    <button className="btn btn-circle btn-orange">
                                        <img src="/icons/flecha_der.svg" alt="flecha derecha"></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exclusive