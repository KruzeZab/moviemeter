import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

interface MovieCardProps {
  id: number;
  image: string;
  title: string;
  rating?: number;
  description?: string;
  year?: number;
  gross?: number;
}

const MovieCard = (props: MovieCardProps) => {
  const { image, title, rating, description, year, gross } = props;

  return (
    <Card sx={{ mr: 2, height: '99.8%' }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent>
          <Typography variant="h5" fontSize="18px" component="div">
            {title} {year && `(${year})`}
          </Typography>
          {rating && (
            <Stack direction="row" alignItems="center" gap={1} mt={1}>
              <Rating
                name="movie-rating"
                size="small"
                value={rating}
                readOnly
              />
              <Typography variant="body1" color="text.secondary">
                {rating}
              </Typography>
            </Stack>
          )}
          {description && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              {description}
            </Typography>
          )}
          {gross && (
            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
              fontSize="16px"
            >
              Current Income:{' '}
              <Typography
                variant="body2"
                color="success.main"
                component="span"
              >
                ${gross}
              </Typography>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  description: PropTypes.string,
  year: PropTypes.number,
};

export default MovieCard;
