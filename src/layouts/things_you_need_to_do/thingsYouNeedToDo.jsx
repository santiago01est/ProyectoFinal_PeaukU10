import TitleSectionContainer from "../../components/title_section";
import "../../styles/things_you_need_to_do.css";
import "../../styles/styles_common_sections.css";
const ThingsYouNeedToDo = () => {
    return (
        <section className="things-you-need-to-do py-3">
            <div className="max-width-section d-flex justify-content-center row mt-5">
                <TitleSectionContainer
                    title1={"Things you need"}
                    title2={"to do"}
                    subtitle={
                        "We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford."
                    }
                    img={"/img/planesV2.svg"}
                />

                <div
                    id="cards-section2"
                    className="justify-content-center row row-cols-3 mt-5 options-banner">
                    <div className="col border-0 mt-5 align-items-center justify-content-center">
                        <div className="card p-2">
                            <div className="card-body">
                                <img
                                    src="/icons/planning.svg"
                                    alt="Sign Up"
                                    className="img-cards m-0 p-0 justify-content-start"
                                />
                                <h5 className="card-title mt-5 cardTitleBold">Sign Up</h5>
                                <p className="card-text mt-3">
                                    Completes all the work associated with planning and
                                    processing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col border-0 mt-5 align-items-center justify-content-center">
                        <div className="card p-2">
                            <div className="card-body">
                                <img
                                    src="/icons/wallet.svg"
                                    alt="Sign Up"
                                    className="img-cards m-0 p-0 justify-content-start"
                                />
                                <h5 className="card-title mt-5 cardTitleBold">
                                    Worth of Money
                                </h5>
                                <p className="card-text mt-3">
                                    After successful access then book from exclusive deals &
                                    pricing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col border-0 mt-5 align-items-center justify-content-center">
                        <div className="card p-2">
                            <div className="card-body">
                                <img
                                    src="/icons/gps.svg"
                                    alt="Sign Up"
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
            </div>
        </section>
    );
};

export default ThingsYouNeedToDo;
