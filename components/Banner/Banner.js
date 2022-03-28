// import { Container, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const images = [
  {
    label: '1',
    imgPath:
      '/imgs/particlon-banner.jpg',
  },
  {
    label: '2',
    imgPath:
      '/imgs/particlon-planets.gif',
  },
  {
    label: '3',
    imgPath:
      '/imgs/flip-banner.png',
  },
  {
    label: '4',
    imgPath:
      '/imgs/flip-penguins.png',
  },
  {
    label: '5',
    imgPath:
      '/imgs/hmc-banner.png',
  }
];

const Banner = () => {
  return (
    <Carousel autoPlay={true} swipeable={true} statusFormatter={() => ''} showThumbs={false} swipeable={true} emulateTouch={true} interval={6000} infiniteLoop={true}>
      {images.map((n) => (
        <Image
          key={n.label}
          width="1500"
          height="500"
          src={n.imgPath}
          alt="my image"
          loading="eager"
        />
      ))}
    </Carousel>
  );
};

export default Banner;