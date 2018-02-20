import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

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

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const deconstructRatings = (ratingObj) => {
  let deconstructedRating = ratingObj.Ratings.find((rating) => { return (rating.Source === "Rotten Tomatoes") } )
  if(deconstructedRating) return deconstructedRating
  return {Source: '', Value: ''}
}

export const movieSearch = (movie, page=1) => axios.get(`${movieApi}&s=${movie}&page=${page}`);
export const movieFetchImdbId = id => axios.get(`${movieApi}&i=${id}`);