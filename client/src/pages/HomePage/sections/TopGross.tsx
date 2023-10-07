import { Box, Typography } from '@mui/material';
import MovieCarousel from '../../../components/carousel/MovieCarousel';
import MovieCard from '../shared/MovieCard';

const MOVIES = [
  {
    id: 1,
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    gross: 1000000,
  },
  {
    id: 2,
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    gross: 1000000,
  },
  {
    id: 2,
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    gross: 1000000,
  },
  {
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    id: 3,
    gross: 1000000,
  },
  {
    id: 4,
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    gross: 1000000,
  },
  {
    id: 5,
    title: 'The Godfather',
    image:
      'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg',
    gross: 1000000,
  },
];

const TopGross = () => {
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
        Top Gross Movies
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

export default TopGross;
