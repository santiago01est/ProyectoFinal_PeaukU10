import { ButtonCircle } from "../../components/buttons";
import TitleSectionContainer from "../../components/title_section";
import "../../styles/people_about.css";
import '../../styles/styles_common_sections.css';
const PeopleAbout = () => {
    return (
        <section className="people-about-section d-flex align-items-center" id="people_about">
            <div className="max-width-section deals row  p-0 d-flex justify-content-center my-5" >
                <div className="col">
                    <TitleSectionContainer
                        title1={"What people say"}
                        title2={"about us"}
                    />
                    <p className="card-text small-text-banner mt-5 lh-lg mb-3 text-start">Our Clients send us bunch of smilies with our services and we love them.</p>
                    <div className=" d-flex justify-content-center mt-5">
                        <div className="col">
                            <div className="d-flex justify-content-start gap-3">
                                <ButtonCircle
                                    pathImg="/icons/flecha_izq.svg"
                                    type="outline"
                                />
                                <ButtonCircle pathImg="/icons/flecha_der.svg" type="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col position-relative" style={{ marginTop: '6.25rem' }}>
                    <div className="about-us">
                        <div className="avatar-people-about  rounded-circle overflow-hidden">
                            <img className="w-100 h-100" src="/img/avatar-people-about.png" alt=""
                                style={{ objectFit: 'cover' }} />
                        </div>
                        <article className="card-people-about card-people-about-active author">
                            <p style={{ lineHeight: '2rem' }}>
                                “On the Windows talking painted pasture yet its express parties use. Sure last upon he
                                same as knew next. Of believed or diverted no.”
                            </p>
                            <div className="d-flex flex-column">
                                <h6 style={{ fontSize: '18px', fontWeight: '600', lineHeight: '2rem' }}>Mike taylor</h6>
                                <span className="text-body-secondary" style={{ fontSize: '14px' }}>
                                    Lahore, Pakistan
                                </span>
                            </div>
                        </article>
                        <article className="card-people-about card-people-about-disabled author">
                            <p style={{ lineHeight: '2rem' }}>
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
        </section>
    );
};

export default PeopleAbout;
