

import About from '../About/About';
import Feature from '../Feature/Feature';
import People from '../People/People';
import Picgallery from '../Picgallery';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Picgallery></Picgallery>
            
            <People></People>
            <Feature></Feature>
            
            
        </div>
    );
};

export default Home;