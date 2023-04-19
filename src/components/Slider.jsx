import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div> 
      <Carousel>
    <Carousel.Item interval={1000}>
      <img height={800} width={1240}
        className="d-block w-100"
        src="./Images/slide2-1240x600.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img height={800} width={1240}
        className="d-block w-100"
        src="./Images/odezhda-960x540.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img height={800} width={1240}
        className="d-block w-100"
        src="./Images/sweatshirts-428607_1920.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider;