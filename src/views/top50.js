import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopMovie } from '../store/actions';
import { sortArray } from '../components/helper';
import Movie from '../components/movie'


class Top50 extends Component {

    componentDidMount() {
        this.props.dispatchGetTopMovie();
    }
    render() {
        let localMovie = []
        if (this.props.movies.length > 0) localMovie = this.props.movies
        console.log(localMovie)
        return (
            <div>
                <h3>Movie Geek Top Movies</h3>
                <div>
                    {
                        localMovie.map( (movie, index) => (
                            <Movie key={`${movie.imdbID}idx${index}`} movie={movie} expand={true} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        movies: state.ourTopMovies,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchGetTopMovie() {
            dispatch(getTopMovie());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Top50);


