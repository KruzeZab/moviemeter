import { Star, StarBorder } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import BannerCarousel from './BannerCarousel';
import MovieCarousel from '../../components/carousel/MovieCarousel';
import MovieCard from '../HomePage/shared/MovieCard';

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

function RatingInfoDesktop() {
  return (
    <Stack
      direction="row"
      spacing={6}
      display={{ xs: 'none', md: 'flex' }}
    >
      {/* Rating */}
      <Stack>
        <Typography
          variant="h5"
          fontSize="medium"
          color="text.secondary"
          mb={1.5}
          textAlign="center"
        >
          Rating
        </Typography>
        <Stack direction="row" gap={1}>
          <Star
            sx={{
              fontSize: '28px',
              color: '#F6CA2A',
            }}
          />
          <Typography variant="h5" component="span" fontSize={'21px'}>
            4.1
            <Typography
              variant="h6"
              fontSize="16px"
              component="span"
              color="text.secondary"
            >
              {' / 5'}
            </Typography>
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          component="span"
          textAlign="center"
          fontSize="small"
          color="text.secondary"
        >
          150
        </Typography>
      </Stack>
      {/* Your Rating */}
      <Stack>
        <Typography
          variant="h5"
          color="text.secondary"
          fontSize={'medium'}
          mb={1}
        >
          Your Rating
        </Typography>
        {/* <Rating name="movie-rating" value={4} precision={0.5} /> */}
        <Tooltip title="Rate this movie">
          <IconButton
            size="small"
            aria-label="open rating modal"
            aria-haspopup={true}
            sx={{ '&:hover': { background: 'transparent' } }}
          >
            <StarBorder
              sx={{
                fontSize: '34px',
                color: 'primary.main',
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
}

function RatingInfoMobile() {
  return (
    <Stack
      direction="row"
      spacing={2}
      mb={2}
      display={{ xs: 'flex', md: 'none' }}
    >
      {/* Rating */}
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Star
          sx={{
            fontSize: '21px',
            color: '#F6CA2A',
          }}
        />
        <Typography
          variant="h5"
          component="span"
          fontWeight="bold"
          fontSize={'18px'}
        >
          4.1
          <Typography
            variant="h6"
            fontSize="18px"
            component="span"
            color="text.secondary"
          >
            {'/5'}
          </Typography>
          <Typography
            variant="h6"
            fontSize="14px"
            component="span"
            color="text.secondary"
          >
            {' (150)'}
          </Typography>
        </Typography>
      </Stack>

      {/* Your Rating */}
      <Button
        variant="text"
        startIcon={<StarBorder />}
        sx={{
          fontWeight: 'bold',
          fontSize: '16px',
          textTransform: 'none',
        }}
      >
        Rate
      </Button>
    </Stack>
  );
}

function MetaInfo() {
  return (
    <Box>
      <Typography
        variant="h1"
        mb={1}
        fontSize={{ xs: '32px', lg: '42px' }}
        fontWeight="bold"
      >
        The Godfather
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        component="ul"
        ml={3}
        color="text.secondary"
      >
        <Box component="li">
          <Typography
            variant="body1"
            fontSize={{ xs: '14px', lg: '16px' }}
          >
            1972
          </Typography>
        </Box>
        <Box component="li">
          <Typography
            variant="body1"
            fontSize={{ xs: '14px', lg: '16px' }}
          >
            Fantasy
          </Typography>
        </Box>
        <Box component="li">
          <Typography
            variant="body1"
            fontSize={{ xs: '14px', lg: '16px' }}
          >
            Sci-Fi
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

const MovieDetailPage = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" justifyContent="space-between" mb={3}>
        {/* Movie Meta Info */}
        <MetaInfo />

        {/* Movie Ratings Info */}

        <RatingInfoDesktop />
      </Stack>

      {/* Moive Banner Carousel */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={3}>
          {/* <Paper> */}
          <Box
            component="img"
            src={
              'https://lumiere-a.akamaihd.net/v1/images/image_24641330.jpeg'
            }
            alt={'image.caption'}
            width="100%"
            height="100%"
            sx={{ maxHeight: { xs: '350px', md: '100%' } }}
          />
          {/* </Paper> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          display={{ xs: 'none', md: 'block' }}
        >
          <BannerCarousel />
        </Grid>
      </Grid>

      <RatingInfoMobile />

      {/* Genres */}
      <Stack direction="row" spacing={1} mb={3}>
        <Chip label="Drama" variant="outlined" />
        <Chip label="Thriller" variant="outlined" />
      </Stack>

      {/* Movie Plot */}
      <Box mb={2}>
        <Typography
          variant="h5"
          fontSize={{ xs: '18px', lg: '20px' }}
          fontWeight="bold"
          mb={1}
        >
          Movie Plot
        </Typography>
        <Typography
          variant="body1"
          fontSize={{ xs: '14px', lg: '16px' }}
          color="text.secondary"
        >
          The aging patriarch of an organized crime dynasty transfers
          control of his clandestine empire to his reluctant son. The
          aging patriarch of an organized crime dynasty transfers
          control of his clandestine empire to his reluctant son. Don
          Vito Corleone, head of a mafia family, decides to hand over
          his empire to his youngest son Michael. However, his
          decision unintentionally puts the lives of his loved ones in
          grave danger.
        </Typography>
      </Box>

      {/* Additional Infos */}
      <List sx={{ mb: 2 }}>
        <ListItem divider sx={{ px: 0, pt: 0 }}>
          <ListItemText
            primary={
              <>
                <Typography
                  variant="h5"
                  component="span"
                  fontSize="16px"
                  fontWeight="bold"
                  mr={1}
                >
                  Director
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  fontSize="16px"
                  color="text.secondary"
                >
                  Francis Ford Coppola
                </Typography>
              </>
            }
          />
        </ListItem>
        <ListItem divider sx={{ px: 0 }}>
          <ListItemText
            primary={
              <>
                <Typography
                  variant="h5"
                  component="span"
                  fontSize="16px"
                  fontWeight="bold"
                  mr={1}
                >
                  Writers
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  fontSize="16px"
                  color="text.secondary"
                >
                  Francis Ford Coppola
                </Typography>
              </>
            }
          />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText
            primary={
              <>
                <Typography
                  variant="h5"
                  component="span"
                  fontSize="16px"
                  fontWeight="bold"
                  mr={1}
                >
                  Stars
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  fontSize="16px"
                  color="text.secondary"
                >
                  Francis Ford Coppola
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      {/* Recommendation */}
      <Box mb={2}>
        <Typography
          variant="h5"
          pl={1.5}
          mb={2.5}
          borderLeft="4px solid orangered"
          fontWeight="bold"
        >
          Recommended For You
        </Typography>
        <MovieCarousel>
          {MOVIES.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </MovieCarousel>
      </Box>
    </Container>
  );
};

export default MovieDetailPage;
