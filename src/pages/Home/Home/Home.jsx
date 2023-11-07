

import About from '../About/About';
import Feature from '../Feature/Feature';
import Picgallery from '../Picgallery';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            
            <Feature></Feature>
            <About></About>
            <Picgallery></Picgallery>
        </div>
    );
};

export default Home;