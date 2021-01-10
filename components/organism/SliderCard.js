import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Container from '../atom/Container'
import Text from '../atom/Text'

function SliderCard({ title, children }){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const card = children
  return (
    <Container slider>
      <Text title>{ title }</Text>
      <Carousel
        additionalTransfrom={0}
        arrows
        ssr={true}
        autoPlay={false}
        autoPlaySpeed={0}
        centerMode={true}
        className="container-slider"
        containerClass="container-slider"
        focusOnSelect={false}
        infinite={false}
        itemClass="slider-card"
        profile="true"
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        deviceType="desktop"
        responsive={responsive}
          >
        {
          card
        }
      </Carousel>
    </Container>
  )
}

export default SliderCard