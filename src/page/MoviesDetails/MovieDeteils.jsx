import { getMoviesDeteils } from 'Servis/fetch-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
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
        <button onClick={handleClick}>Go back</button>
        {movie && <Heading text={movie.title} />}
        {loading && 'Loading...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
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
          <Outlet />
        </div>
      </Container>
    </>
  );
}
