import CatagoriList from "../../CatagoriList/CatagoriList";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJons/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoriList></CatagoriList>
            <FeaturedJobs></FeaturedJobs>

            <h2>This is home</h2>
        </div>
    );
};

export default Home;