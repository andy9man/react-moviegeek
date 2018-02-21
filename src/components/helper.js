import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import {MOCKAPI_API_URL} from '../store/actions';

const movieApi = "http://www.omdbapi.com/?apikey=b99d98de&type=movie";

export const CustomNav = ( {label, to, activeOnlyWhenExact, generalClassName} ) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={ ({match}) => {
        return (
        <li className={`${generalClassName}${match ? ' active' : ''}`}>
          <Link to={to} style={ {fontWeight: 'normal'} }>{label}</Link>
        </li>
        )}
      } />
    );
};

export const required = value => value ? undefined : 'Required';

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const deconstructRatings = ratingObj => {
  if( ratingObj ) {
    const deconstructedRating = ratingObj.find(rating => rating.Source === "Rotten Tomatoes");
    if( deconstructedRating ) { return deconstructedRating; }
  }
  return {Source: '', Value: ''}
}

export const findMovie = (movieArray, movieName, imdbID = "") => {
  const checkForMovie = movieArray.find( movie => (movie.Title.toLowerCase().trim() === movieName.toLowerCase().trim() || movie.imdbID === imdbID) );
  return checkForMovie ? {found: true, id: checkForMovie.movieId} : {found: false};
}

export const movieSearch = (movie, page=1) => axios.get(`${movieApi}&s=${movie}&page=${page}`);
export const movieFetchImdbId = id => axios.get(`${movieApi}&i=${id}`);
export const getUsers = () => axios.get(`${MOCKAPI_API_URL}/user`);

export const calculateMovieScore = ( movie, topMovieArray ) => {
  //Default movie watched is worth '1' point
  let score = 1;

  //If the movie is on our Top Movie they get an additional bonus of '5' points
  score += findMovie( topMovieArray, movie.Title ).found ? 15 : 0;

  //Bad Rotten Tomatoes score adds points
  const ratingScore = deconstructRatings(movie.Ratings);
  score += ratingScore.Value === "" ? 0 : 10 - Math.floor(parseInt(ratingScore.Value, 10) / 10)

  //Older movies get more:
    // <= 1985 + '3' points
  score += parseInt(movie.Year, 10) <= 1985 ? 3 : 0;

  return score;
}