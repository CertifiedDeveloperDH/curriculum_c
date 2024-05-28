import Carousel from 'react-bootstrap/Carousel';
import java_image from '/Java-Logo.png';
import javascript_image from '/javascript.png';
import css_image from '/CSS-Logo.jpg'

export const Carouselc = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='java_image' alt='java_image'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='javascript_image' alt='javascript_image' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='css_image' alt='css_image' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselc;