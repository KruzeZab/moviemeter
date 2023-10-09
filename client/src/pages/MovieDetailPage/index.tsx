import {
  Box,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import BannerCarousel from './BannerCarousel';

import { MOVIES } from '../../data';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface MetaInfoProps {
  title: string | undefined;
  year: number | undefined | null;
  genre: [] | undefined;
}

function MetaInfo({ title, year, genre }: MetaInfoProps) {
  return (
    <Box>
      <Typography
        variant="h1"
        mb={1}
        fontSize={{ xs: '32px', lg: '42px' }}
        fontWeight="bold"
      >
        {title}
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
            {year}
          </Typography>
        </Box>
        {genre?.map((gen) => (
          <Box component="li" key={gen}>
            <Typography
              variant="body1"
              fontSize={{ xs: '14px', lg: '16px' }}
            >
              {gen}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

interface MovieType {
  id: null | number;
  title: string;
  rating: number | null;
  director: string | null;
  genre: [];
  imageUrls: [];
  excerpt: string;
  grossIncome: null;
  year: null;
  writers: [];
  stars: [];
  description: string;
}

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<MovieType | undefined>(
    undefined
  );
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const result = MOVIES.find((movie) => movie.id === Number(id));

    if (!result) navigate('/');

    setMovie(result);
  }, [id, navigate]);

  return (
    <Container maxWidth="xl">
      <Stack direction="row" justifyContent="space-between" mb={3}>
        {/* Movie Meta Info */}
        <MetaInfo
          title={movie?.title}
          year={movie?.year}
          genre={movie?.genre}
        />
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

      {/* Genres */}
      <Stack direction="row" spacing={1} mb={3}>
        {movie?.genre?.map((genre) => (
          <Chip label={genre} variant="outlined" />
        ))}
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
          {movie?.description}
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
                  {movie?.director}
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
                {movie?.writers?.map((writer) => (
                  <Typography
                    key={writer}
                    variant="body1"
                    component="span"
                    fontSize="16px"
                    color="text.secondary"
                  >
                    {writer}
                    {', '}
                  </Typography>
                ))}
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
                {movie?.stars.map((star) => (
                  <Typography
                    key={star}
                    variant="body1"
                    component="span"
                    fontSize="16px"
                    color="text.secondary"
                  >
                    {star}
                    {', '}
                  </Typography>
                ))}
              </>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default MovieDetailPage;
