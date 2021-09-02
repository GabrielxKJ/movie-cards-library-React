import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((all) => <MovieCard key={ all.title } movieInfo={ all } />)}
      </section>
    );
  }
}

export default MovieList;
