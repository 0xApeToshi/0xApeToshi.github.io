import { Container, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const images = [
  {
    label: '1',
    imgPath:
      '/banner/1.gif',
  },
  {
    label: '2',
    imgPath:
      '/banner/2.gif',
  },
  {
    label: '3',
    imgPath:
      '/banner/3.jpg',
  },
  {
    label: '4',
    imgPath:
      '/banner/4.jpg',
  },
  {
    label: '5',
    imgPath:
      '/banner/5.jpg',
  }
];

const Banner = () => {
  return (
    <Carousel autoPlay={true} swipeable={true} statusFormatter={() => ''} showThumbs={false} swipeable={true} emulateTouch={true} interval={8000}>
      {images.map((n) => (
        <Image
          key={n.label}
          width="1600"
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