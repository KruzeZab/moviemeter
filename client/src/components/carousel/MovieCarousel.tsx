import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 4,
    partialVisible: false,
    partialVisibilityGutter: 10,
  },
  desktop: {
    breakpoint: { max: 1200, min: 700 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },

  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
};

interface MovieCarouselProps {
  children: React.ReactNode;
}

const MovieCarousel = ({ children }: MovieCarouselProps) => {
  return (
    <Carousel
      draggable
      partialVisible
      responsive={responsive}
      infinite={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {children}
    </Carousel>
  );
};

MovieCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieCarousel;
