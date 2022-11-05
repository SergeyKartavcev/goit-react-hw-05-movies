import { getMoviesDeteils } from 'Servis/fetch-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Container  from 'components/Container/Container';
import Heading from 'components/Heading/Heading';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function MuvieDeteils() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    getMoviesDeteils(movieId)
      .then(response => {
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
        <button onClick={handleClick}>Go back</button>
        {movie && <Heading text={movie.title} />}
        {loading && 'Loading...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img 
            src={movie.poster_path}
            alt={movie.title} />

            <h2>{movie.title}</h2>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <p>{movie.genres}</p>
            </div>
          </div>
        )}
         <hr />
        <div>
          <h2>Additional Information</h2>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p >Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p >Cast</p>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </Container>
    </>
  );
}
