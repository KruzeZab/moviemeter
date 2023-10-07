import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { getTwoDigitIndex } from '../../helpers/fn';

interface TrendingsProps {
  trendings: {
    title: string;
    director: string;
    year: number;
    genre: string[];
  }[];
}

function CardTrending(props: TrendingsProps) {
  const { trendings } = props;

  return (
    <>
      {trendings.map((trend) => (
        <Card key={trend.title} sx={{ mt: 4 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 200 }}
              image="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/04/ed-rise-2.png"
              title="green iguana"
            />
            <CardContent>
              <Stack gap={1}>
                <Typography variant="h4" fontSize="18px">
                  The GodFather (1972)
                </Typography>
                <Rating
                  aria-label="4"
                  name="movie-review"
                  size="small"
                  value={4}
                  readOnly
                />
                <Typography variant="body2" color="text.secondary">
                  Director: {trend.director}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Genre: {trend.genre.join(', ')}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

CardTrending.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

function ListTrending(props: TrendingsProps) {
  const { trendings } = props;

  return (
    <List>
      {trendings.map((trend, index) => (
        <>
          <ListItem
            alignItems="flex-start"
            key={trend.title}
            sx={{ px: 0, py: 1, pb: 2, m: 0 }}
          >
            <ListItemButton sx={{ p: 0.5, py: 2 }}>
              <ListItemAvatar>
                <Typography
                  variant="h4"
                  fontSize="42px"
                  color="error.main"
                  mr={3}
                >
                  {getTwoDigitIndex(index + 1)}
                </Typography>
              </ListItemAvatar>
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
                    {trend.title} ({trend.year})
                  </Typography>
                  <Rating
                    aria-label="4"
                    name="movie-review"
                    size="small"
                    value={4}
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    Director: {trend.director}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genre: {trend.genre.join(', ')}
                  </Typography>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
          {index < trendings.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </>
      ))}
    </List>
  );
}

ListTrending.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

const Trendings = (props: TrendingsProps) => {
  const { trendings } = props;

  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.up('sm'));

  return smallDevice ? (
    <ListTrending trendings={trendings} />
  ) : (
    <CardTrending trendings={trendings} />
  );
};

Trendings.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Trendings;
