import { Paper, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const images = [
  {
    imageUrl:
      'https://images.thedirect.com/media/article_full/black-adam-characters-poster.jpg',
    caption: 'Image 1',
  },
  {
    imageUrl:
      'https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg',
    caption: 'Image 2',
  },
  {
    imageUrl:
      'https://lumiere-a.akamaihd.net/v1/images/image_24641330.jpeg',
    caption: 'Image 3',
  },
  {
    imageUrl:
      'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/04/ed-rise-2.png',
    caption: 'Image 4',
  },
  // Add more images as needed
];

const BannerCarousel = () => {
  const theme = useTheme();
  const largeDevice = useMediaQuery(theme.breakpoints.up('lg'));

  const imageHeight = largeDevice ? '350px' : '300px';

  return (
    <Carousel
      sx={{ borderRadius: theme.shape.borderRadius }}
      indicators={false}
      animation="slide"
      navButtonsAlwaysVisible
      height={imageHeight}
    >
      {images.map((image) => (
        <Paper key={image.imageUrl}>
          <img
            src={image.imageUrl}
            alt={image.caption}
            style={{
              width: '100%',
              height: imageHeight,
              objectFit: 'cover',
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
