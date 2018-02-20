import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getTopMovie} from '../store/actions';
import { sortArray } from '../components/helper';
import {Card, CardActions, CardHeader, CardText,CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Movie from '../components/movie'


class Top50 extends Component{

componentDidMount() {
this.props.dispatchGetTopMovie();
}
render() {
let localMovie = []
if(this.props.movies) localMovie = this.props.movies
// localMovie=[
// {
// rank:'5',
// title:'gone with the wind',
// year:'1985'
// }
// ]
return (
<div>
<h5 >Top 50</h5>
<div>
{
localMovie.map(
    (movie, index) => (
        <Movie key={`${movie.imdbID}idx${index}`} movie={movie} />
//     <Card>
// <CardHeader
// title={`${movie.rank}  ${movie.title}`}
// subtitle={`(${movie.year})`} />
//   <CardMedia>
//       <img src={movie.img} alt="" />
//     </CardMedia>
// <CardText expandable={true}> 
// {movie.Description}
// </CardText>
// <CardActions>
//       <FlatButton label="Add To Queue" />
//       <FlatButton label="Watched" />
//     </CardActions>

// </Card>
// </div>
// </div>
    ))
}
</div>
</div>
)
}}
const mapStateToProps = state => {
return {
movies: state.movies,
}}

const mapDispatchToProps = dispatch => {
return {
dispatchGetTopMovie(){
dispatch( getTopMovie() );
}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Top50);


