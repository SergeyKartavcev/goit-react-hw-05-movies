import { Link } from 'react-router-dom';
import s from './MovieList.module.css'
export default function MovieList  ({ movies, prevLocation })  {
  return (
    <>
      <ul className={s.movie_list} >
            {movies.map(movie => (
              <li className={s.movie_item} key={movie.id} >
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: prevLocation },
                  }}
            
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : 'noPhoto'
                    }
                    alt={movie.title}
                   className={s.poster}
                  />
                </Link>
                <span >{movie.title}</span>
              </li>
            ))}
          </ul>
    </>
  );
};
