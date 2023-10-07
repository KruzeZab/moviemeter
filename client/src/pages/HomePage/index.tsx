import { Grid } from '@mui/material';
import FeatureCarousel from '../../components/carousel/Feature';
import TrendingSection from './sections/TrendingSection';
import TopRatedMovies from './sections/TopRated';
import TopGrossMovies from './sections/TopGross';
import TopNews from './sections/TopNews';

import './index.css';

const HomePage = () => {
  return (
    <Grid container spacing={3} rowSpacing={0}>
      <Grid item xs={12} lg={9} mb={4}>
        <FeatureCarousel />
      </Grid>
      <Grid item xs={12} lg={3}>
        <TrendingSection />
      </Grid>

      <Grid item xs={12}>
        <TopRatedMovies />
      </Grid>

      <Grid item xs={12}>
        <TopGrossMovies />
      </Grid>

      <Grid item xs={12}>
        <TopNews />
      </Grid>
    </Grid>
  );
};

export default HomePage;
