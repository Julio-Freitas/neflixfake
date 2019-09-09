import React from 'react';
import MovieSingle from './MovieSingle';

const MovieSlider = (props) => {
    const { moveis } = props;

    return (
        <div className="flex-wrapper">
            {
                moveis.map(movie => (
                    movie.backdrop_path ?
                        <MovieSingle
                            key={movie.title}
                            image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                            title={movie.title}
                            description={movie.overview}
                            date={movie.release_date}
                        />
                        : null
                ))
            }
        </div>

    )


}

export default MovieSlider