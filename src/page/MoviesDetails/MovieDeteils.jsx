import { getMoviesDeteils } from 'Servis/fetch-api';
import { useState, useEffect, Suspense  } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import s from './MovieDetails.module.css'

export default function MuvieDeteils() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
 

  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    getMoviesDeteils(movieId)
      .then(response => {
        console.log(response);
        setMovie(response);
      })
      .catch(error => {
        setError('ooops. Something went wrong...');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Container>
        <button className={s.button_back} onClick={handleClick}>Go back</button>
        {movie && <Heading  text={movie.title} />}
        {loading && 'Loading...'}
        {error && <div>{error}</div>}
        {movie && (
          <div className={s.movies}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
<div className={s.about}>
            <h3 className={s.title}>{movie.title}</h3>
            <p>({getYear()})</p>
            <p className={s.score}>User Score: {movie.popularity}</p>
            <div className={s.overview} >
              <h3 className={s.title}>Overview</h3>
              <p className={s.description}>{movie.overview}</p>
            </div>
            <>
              <h3 className={s.title}>Genres</h3>
              <ul className={s.genre}>
                {movie.genres.map(genre => (
                  <li className={s.genre_item} key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          </div>
          </div>
        )}
        <hr />
        <div>
          <h2>Additional Information</h2>
          <NavLink
            to={`reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <p>Reviews</p>
          </NavLink>

          <NavLink
            to={`cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <p>Cast</p>
          </NavLink>
          <hr />
          <Suspense>
          <Outlet />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
