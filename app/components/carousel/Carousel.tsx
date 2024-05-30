import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import styles from './Carouselc.module.css'

export const Carouselc = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.imageContainer}>
        <Image 
        src= "/Java-Logo.png" 
        alt='java_image'
        width={100}
        height={100}
        className={styles.image}/>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.imageContainer}>
        <Image src='/javascript.png' 
        alt='javascript_image' 
        width={100}
        height={100}
        className={styles.image}/>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.imageContainer}>
        <Image src='/CSS-Logo.jpg' 
        alt='css_image'
        width={100}
        height={100}
        className={styles.image} />
        </div>
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