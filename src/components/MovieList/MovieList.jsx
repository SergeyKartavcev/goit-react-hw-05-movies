import { Link } from 'react-router-dom';

export default function MovieList  ({ movies, prevLocation })  {
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} stete={{ from: prevLocation }}>
              <h3>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
