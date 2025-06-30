
import About from './About';
import Banner from './Banner';
import HowtoFind from './HowtoFind';
import Services from './Services';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <About></About>
            <Services></Services>
              
               <HowtoFind></HowtoFind>
               <Team></Team>
        </div>
    );
};

export default Home;