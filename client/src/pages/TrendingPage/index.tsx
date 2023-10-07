import { Typography } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

import Trendings from './Trendings';

const TRENDINGS = [
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'American History X',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'The Silence of the Lambs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Club',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
  {
    title: 'Fight Clubs',
    year: 1972,
    director: 'Mark Robbins',
    genre: ['Thriller', 'Comedy'],
  },
];

const TrendingPage = () => {
  return (
    <section>
      {/* Title */}
      <Typography
        borderLeft="4px solid orangered"
        pl={2}
        mb={2}
        variant="h4"
        fontSize="28px"
        display="flex"
        alignItems="center"
        gap={1}
      >
        Trending Today
        <TrendingUpIcon />
      </Typography>

      {/* Trending List */}
      <Trendings trendings={TRENDINGS} />
    </section>
  );
};

export default TrendingPage;
