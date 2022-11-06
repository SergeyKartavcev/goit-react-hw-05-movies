import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar/AppBar';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('../page/Home/Home'));

const Movies = lazy(() => import('../page/Movies/Movies'));

const MoviesDetails = lazy(() => import('../page/MoviesDetails/MovieDeteils'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<MoviesDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
