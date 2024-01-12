import '../../styles/vacation_plan.css';
const VacationPlan= () => {
    return (
        <section id='vacation_plan' className=" mt-5 p-4">
            <div className="justify-content-center row mt-5">
                <div className="col-6 border-0 mt-3  align-items-center justify-content-center">
                    <div className='main-title d-flex justify-content-center align-items-center flex-column'>
                        <h2 className="card-title title-banner">Best <span className="span-color-banner">vacation plan</span>
                        </h2>
                        <p className="card-text small-text-banner mt-4 lh-lg mb-3">Plan your perfect vacation with our travel
                            agency. Choose among hundreds of all-inclusive offers! 
                        </p>
                        <img src="/icons/palms.svg" alt="viajes"></img>
                    </div>
                </div>
            </div>
    
    
            <div className="justify-content-end d-flex mb-5">
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-circle btn-white me-3">
                            <img src="/icons/flecha_izq.svg" alt="flecha izquierda"></img>
                        </button>
                        <button className="btn btn-circle btn-orange">
                            <img src="/icons/flecha_der.svg" alt="flecha derecha"></img>
                        </button>
                    </div>
                </div>
            </div>
    
            
            <div id="cards-section2" className="justify-content-around row row-cols-4 mt-1 options-banner">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card p-0 book-card border-0">
                        <div className="card-header p-0 border-0" style={{ backgroundColor: 'white' }}>
                            <img src="/img/Imgcard05.jpg" alt="France" className="w-100 m-0 p-0"></img>
    
                        </div>
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col d-flex d-flex justify-content-between px-3">
                                    <h5 className="card-title">Rome, Italty</h5>
                                    <div className="col-3 ms-2 px-0 text-center  justify-content-end">
                                        <p id="" className="card-text color-precio-card">$5,42k</p>
                                    </div>
    
                                </div>
                            </div>
                            <div className="row mt-3 px-3">
                                <div className="col px-0">
                                    <p className="card-text"><img src="/icons/Navigation.svg"></img> 10 Days Trip</p>
                                </div>
                                <div className="col px-0 d-flex justify-content-end align-items-center">
                                    <p className="card-text"> <img src="/icons/star.svg"></img>4.8</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
    
    
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card p-0 book-card border-0">
                        <div className="card-header p-0 border-0" style={{ backgroundColor: 'white' }}>
                            <img src="/img/Imgcard06.png" alt="France" className="w-100 m-0 p-0" />
    
                        </div>
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col d-flex d-flex justify-content-between px-3">
                                    <h5 className="card-title">London,UK</h5>
                                    <div className="col-3 ms-2 px-0 text-center  justify-content-end">
                                        <p id="" className="card-text color-precio-card">$2,42k</p>
                                    </div>
    
                                </div>
                            </div>
                            <div className="row mt-3 px-3">
                                <div className="col px-0">
                                    <p className="card-text"><img src="/icons/Navigation.svg" /> 07 Days Trip</p>
                                </div>
                                <div className="col px-0 d-flex justify-content-end align-items-center">
                                    <p className="card-text"> <img src="/icons/star.svg" />4.7</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
    
    
    
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card p-0 book-card border-0">
                        <div className="card-header p-0 border-0" style={{ backgroundColor: 'white' }}>
                            <img src="/img/Imgcard07.png" alt="France" className="w-100 m-0 p-0" />
    
                        </div>
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col d-flex d-flex justify-content-between px-3">
                                    <h5 className="card-title">Osaka,Japan</h5>
                                    <div className="col-3 ms-2 px-0 text-center  justify-content-end">
                                        <p id="" className="card-text color-precio-card">$5,42k</p>
                                    </div>
    
                                </div>
                            </div>
                            <div className="row mt-3 px-3">
                                <div className="col px-0">
                                    <p className="card-text"><img src="/icons/Navigation.svg" /> 10 Days Trip</p>
                                </div>
                                <div className="col px-0 d-flex justify-content-end align-items-center">
                                    <p className="card-text"> <img src="/icons/star.svg" />4.8</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VacationPlan