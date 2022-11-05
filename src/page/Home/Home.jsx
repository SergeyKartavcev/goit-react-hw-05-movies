import { useEffect, useState } from 'react';
import { getTrendingMuvies } from 'Servis/fetch-api';
import  Container  from 'components/Container/Container';
import Heading from 'components/Heading/Heading';
import MovieList  from 'components/MovieList/MovieList';

export default function Home () {
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendingMuvie = () => {
      setLoading(true);
      getTrendingMuvies()
        .then(results => {
          setMovie(results);
        })
        .catch(error => {
          setError('something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMuvie();
  }, []);
  return (
    <>
      <Container>
        <Heading text={'Trending Movies'}></Heading>
        {loading && 'Loading...'}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
      </Container>
    </>
  );
};
