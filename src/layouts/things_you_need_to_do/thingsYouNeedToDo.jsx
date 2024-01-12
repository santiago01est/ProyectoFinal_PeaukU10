import "../../styles/things_you_need_to_do.css";
const ThingsYouNeedToDo = () => {
    return (
        <section className="things-you-need-to-do py-3">
            <div id="title_banner" className="d-flex justify-content-center row mt-5">
                <div className="col-8 border-0 mt-5 align-items-center justify-content-center">
                    <div className="main-title d-flex justify-content-center align-items-center flex-column">
                        <h2 className="card-title title-banner">
                            Things you need <span className="span-color-banner">to do</span>
                        </h2>
                        <p className="card-text small-text-banner mt-5 lh-lg mb-3">
                            We ensure that you’ll embark on a perfectly planned, safe vacation
                            at a price you can afford.{" "}
                        </p>
                        <img src="/img/planesV2.svg" alt="viajes"></img>
                    </div>
                </div>
            </div>

            <div
                id="cards-section2"
                className="justify-content-center row row-cols-3 mt-5 options-banner"
            >
                <div className="col border-0 mt-5 align-items-center justify-content-center">
                    <div className="card p-2">
                        <img src="/icons/line_signUp.svg" alt="line_signUp" className= "line" />
                        <div className="card-body">
                            <img
                                src="/icons/planning.svg"
                                className="img-cards m-0 p-0 justify-content-start"
                            />
                            <h5 className="card-title mt-5 cardTitleBold">Sign Up</h5>
                            <p className="card-text mt-3">
                                Completes all the work associated with planning and processing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col border-0 mt-5 align-items-center justify-content-center">
                    <div className="card p-2">
                    <img src="/icons/line_money.svg" alt="line_money" className= "line" />
                        <div className="card-body">
                            <img
                                src="/icons/wallet.svg"
                                className="img-cards m-0 p-0 justify-content-start"
                            />
                            <h5 className="card-title mt-5 cardTitleBold">Worth of Money</h5>
                            <p className="card-text mt-3">
                                After successful access then book from exclusive deals &
                                pricing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col border-0 mt-5 align-items-center justify-content-center">
                    <div className="card p-2">
                    <img src="/icons/line_travel.svg" alt="line_travel" className= "line" />
                        <div className="card-body">
                            <img
                                src="/icons/gps.svg"
                                className="img-cards m-0 p-0 justify-content-start"
                            ></img>
                            <h5 className="cardTitleBold card-title mt-5 ">
                                Exciting Travel
                            </h5>
                            <p className="card-text mt-3">
                                Start and explore a wide range of exciting travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsYouNeedToDo;
