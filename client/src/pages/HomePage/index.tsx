import { Grid } from '@mui/material';
import FeatureCarousel from '../../components/carousel/Feature';
import TrendingSection from './sections/TrendingSection';
import TopRatedMovies from './sections/TopRated';
import TopGrossMovies from './sections/TopGross';
import TopNews from './sections/TopNews';

import './index.css';

import {
  CAROUSELS,
  TRENDINGS,
  FROM_US,
  TOP_GROSS,
  NEWS,
} from '../../data.ts';

const HomePage = () => {
  return (
    <Grid container spacing={3} rowSpacing={0}>
      <Grid item xs={12} lg={9} mb={4}>
        <FeatureCarousel carousels={CAROUSELS} />
      </Grid>
      <Grid item xs={12} lg={3}>
        <TrendingSection trendings={TRENDINGS} />
      </Grid>

      <Grid item xs={12}>
        <TopRatedMovies movies={FROM_US} />
      </Grid>

      <Grid item xs={12}>
        <TopGrossMovies movies={TOP_GROSS} />
      </Grid>

      <Grid item xs={12}>
        <TopNews news={NEWS} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
