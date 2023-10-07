import PropTypes from 'prop-types';

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

interface SearchListProps {
  results: {
    title: string;
    year: number;
    director: string;
    genre: string[];
  }[];
}

const SearchList = (props: SearchListProps) => {
  const { results } = props;

  return (
    <List>
      {results.map((result, index) => (
        <>
          <ListItem alignItems="flex-start" key={result.title}>
            <ListItemButton sx={{ p: 0.5, py: 2 }}>
              <Stack direction="row" gap={2}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/04/ed-rise-2.png"
                    variant="rounded"
                    sx={{ width: '150px', height: '100%' }}
                  />
                </ListItemAvatar>
                <Stack gap={1}>
                  <Typography variant="h4" fontSize="18px">
                    {result.title} ({result.year})
                  </Typography>
                  <Rating
                    aria-label="4"
                    name="movie-review"
                    size="small"
                    value={4}
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    Director: {result.director}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genre: {result.genre.join(', ')}
                  </Typography>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
          {index < results.length - 1 && (
            <Divider variant="middle" component="li" />
          )}
        </>
      ))}
    </List>
  );
};

SearchList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
    }).isRequired
  ).isRequired,
};

export default SearchList;
