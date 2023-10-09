import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';

import GuardRoute from './GuardRoute';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TrendingPage from '../pages/TrendingPage';
import SearchPage from '../pages/SearchPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import RecommendPage from '../pages/RecommendPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/recommend" element={<RecommendPage />} />

        {/* All the protected routes go here */}
        <Route element={<GuardRoute />}></Route>
      </Route>
    </>
  )
);

export default router;
