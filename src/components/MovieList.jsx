import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((all) => <MovieCard key={ all.title } movie={ all } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [{
    imagePath: '',
    title: '',
    subtitle: '',
    storyline: '',
  }],
};

export default MovieList;
