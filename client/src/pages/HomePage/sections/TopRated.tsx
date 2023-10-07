import { Box, Typography } from '@mui/material';
import MovieCarousel from '../../../components/carousel/MovieCarousel';
import MovieCard from '../shared/MovieCard';

const MOVIES = [
  {
    id: 1,
    title: 'The Godfather',
    rating: 4.5,
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1972,
  },
  {
    id: 2,
    title: 'The Godfather: Part II',
    rating: 4.5,
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1974,
  },
  {
    id: 2,
    title: 'The Godfather: Part II',
    rating: 4.5,
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1974,
  },
  {
    id: 3,
    title: 'The Godfather: Part II',
    rating: 4.5,
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1974,
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    rating: 4.5,
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1974,
  },
  {
    id: 5,
    title: 'The Godfather: Part II',
    rating: 4.5,
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    year: 1974,
  },
];

const TopRated = () => {
  return (
    <section>
      {/* Title */}
      <Typography
        variant="h5"
        pl={1.5}
        mb={2.5}
        borderLeft="4px solid orangered"
        fontWeight="bold"
      >
        Recommended From us
      </Typography>
      <Box mb={4}>
        <MovieCarousel>
          {MOVIES.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </MovieCarousel>
      </Box>
    </section>
  );
};

export default TopRated;
