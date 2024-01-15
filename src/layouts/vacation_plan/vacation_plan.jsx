import { ButtonCircle } from '../../components/buttons';
import CardPlan from '../../components/cards';
import TitleSectionContainer from '../../components/title_section';
import '../../styles/vacation_plan.css';
const VacationPlan = () => {
    return (
        <section id='vacation_plan' className=" mt-5 mb-5 p-4">
            <div className="justify-content-center row mt-5">
                <TitleSectionContainer
                    title1={"Best"}
                    title2={"vacation plan"}
                    subtitle={
                        "Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! "
                    }
                    img={"/icons/palms.svg"}
                />
            </div>


            <div className="justify-content-end d-flex mb-5">
                <div className="col-6">
                    <div className="d-flex justify-content-end gap-3">
                        <ButtonCircle pathImg="/icons/flecha_izq.svg" type="outline" />
                        <ButtonCircle pathImg="/icons/flecha_der.svg" type="fill" />
                    </div>
                </div>
            </div>


            <div id="cards-section2" class="justify-content-center row row-cols-3 mt-5 mb-5 options-banner">
                <div className="col border-0 mt-5 d-flex align-items-center justify-content-center p-0 gap-3">
                    <CardPlan imgPath="/img/Imgcard05.jpg" title="Rome, Italty" price="$2,42k" time="10 Days Trip" score="4.8" />
                </div>

                <div className=" col border-0 mt-5 d-flex align-items-center justify-content-center p-0">
                    <CardPlan imgPath="/img/Imgcard05.jpg" title="London, UK" price="$2,42k" time="07 Days Trip" score="4.7" />
                </div>


                <div className="col border-0 mt-5 d-flex align-items-center justify-content-center p-0">
                    <CardPlan imgPath="/img/Imgcard05.jpg" title="Osaka,Japan" price="$5,42k" time="10 Days Trip" score="4.8" />
                </div>


            </div>
        </section>
    )
}

export default VacationPlan