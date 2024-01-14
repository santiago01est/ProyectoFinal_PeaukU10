import "../../styles/people_about.css";
const PeopleAbout = () => {
    return (
        <section className="people-about-section d-flex align-items-center" id="people_about">
            <div className="deals row p-0 d-flex justify-content-center container-fluid" >
                <div className="col-4">
                    <div className="main-title d-flex justify-content-center align-items-start flex-column">
                        <h2 className="card-title title-banner text-start">
                            What people say <span className="span-color-banner">about us</span>
                        </h2>
                        <p className="card-text small-text-banner mt-5 lh-lg mb-3 text-start">
                            Our Clients send us bunch of smilies with our services and we love them.{" "}
                        </p>
                        <div className="mt-5">
                            <div className="d-flex">
                                <button className="btn btn-circle btn-white me-5">
                                    <img src="/icons/flecha_izq.svg" alt="flecha izquierda"></img>
                                </button>
                                <button className="btn btn-circle btn-orange">
                                    <img src="/icons/flecha_der.svg" alt="flecha derecha"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 position-relative">
                    <div className="content d-flex">
                        <div className="about-us">
                            <div className="avatar-people-about  rounded-circle overflow-hidden">
                                <img className="w-100 h-100" src="/img/avatar-people-about.png" alt=""
                                    style={{ objectFit: 'cover' }} />
                            </div>
                            <article className="card-people-about card-people-about-active author">
                                <p style={{lineHeight: '2rem'}}>
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he
                                    same as knew next. Of believed or diverted no.”
                                </p>
                                <div className="d-flex flex-column">
                                    <h6 style={{ fontSize: '18px', fontWeight: '600', lineHeight: '2rem'}}>Mike taylor</h6>
                                    <span className="text-body-secondary" style={{ fontSize: '14px' }}>
                                        Lahore, Pakistan
                                    </span>
                                </div>
                            </article>
                            <article className="card-people-about card-people-about-disabled author">
                                <p style={{lineHeight: '2rem'}}>
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he
                                    same as knew next. Of believed or diverted no.”
                                </p>
                                <div className="d-flex flex-column">
                                    <h6 className="text-body-secondary" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '2rem' }}>Chris Thomas</h6>
                                    <span className="text-body-secondary" style={{ fontSize: '14px' }}>CEO of Red Button</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleAbout;
