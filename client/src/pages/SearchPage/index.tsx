import { Typography } from '@mui/material';
import SearchList from './SearchList';

const SEARCH_RESULTS = [
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

const Searchpage = () => {
  return (
    <>
      <Typography
        borderLeft="4px solid orangered"
        pl={2}
        variant="h4"
        fontSize="28px"
        display="flex"
        alignItems="center"
        gap={1}
      >
        Search Result
      </Typography>
      <SearchList results={SEARCH_RESULTS} />
    </>
  );
};

export default Searchpage;
