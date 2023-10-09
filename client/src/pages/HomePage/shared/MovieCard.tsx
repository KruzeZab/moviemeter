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
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  director: string;
  genre: string[];
  imageUrls: string[];
  excerpt: string;
  grossIncome: number;
  year: number;
  writers: string[];
  stars: string[];
  description: string;
}
[];

const MovieCard = (props: MovieCardProps) => {
  const { id, imageUrls, title, rating, description, year, grossIncome } =
    props;

  return (
    <Card sx={{ mr: 2, height: '99.8%' }}>
      <CardActionArea LinkComponent={Link} to={`/movie/${id}`}>
        <CardMedia sx={{ height: 200 }} image={imageUrls[0]} title={title} />
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
          {grossIncome && (
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
                ${grossIncome}
              </Typography>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// MovieCard.propTypes = {
//   imageUrls: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
//   rating: PropTypes.number,
//   description: PropTypes.string,
//   year: PropTypes.number,
// };

export default MovieCard;
