import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <img src={ movieInfo.imagePath } alt="" />
        <h3>{ movieInfo.title }</h3>
        <h4>{movieInfo.subtitle}</h4>
        <p>{movieInfo.storyline }</p>
      </section>
    );
  }
}

export default MovieCard;
