import { Carousel } from 'react-bootstrap';
import { useAppSelector } from '../../../../app/hooks';
import { carouselInfo } from '../../../../utils/consts';

function CustomCarousel() {

    const language = useAppSelector(state => state.language);

    return (
        <Carousel className='customCarousel' id='home'>
            <Carousel.Item>
                <div className='customCarouselFirst text-center'>
                    <p className='m-5 pt-5 titleCarousel'>{carouselInfo[language].first.title}</p>
                </div>
                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <button className='btnContact'>
                            <a href="#about_us" >{carouselInfo[language].first.btn}</a>
                        </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='customCarouselSecond text-center'>
                    <p className='m-5 pt-5 titleCarousel'>{carouselInfo[language].second.title}</p>
                </div>
                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <button className='btnContact'>
                            <a href="#contact" >{carouselInfo[language].second.btn}</a>
                        </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='customCarouselThird text-center'>
                    <p className='m-5 pt-5 titleCarousel' >{carouselInfo[language].third.title}</p>
                </div>
                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <button className='btnContact'><a href="#our_services">{carouselInfo[language].third.btn}</a>
                        </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;