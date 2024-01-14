
import Header from '../components/header'
import BannerMain from '../layouts/banner_main/banner_main'
import Exclusive from '../layouts/exclusive/exclusive'
import PeopleAbout from '../layouts/people_about/people_about'
import ThingsYouNeedToDo from '../layouts/things_you_need_to_do/thingsYouNeedToDo'
import VacationPlan from '../layouts/vacation_plan/vacation_plan'
const Home= () => {
    return (
        <>
        <Header/>
        <BannerMain/>
        <ThingsYouNeedToDo/>
        <Exclusive/>
        <VacationPlan/>
        <PeopleAbout/>
        </>
    )
}

export default Home