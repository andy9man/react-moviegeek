import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getTopMovie} from '../store/actions';
import { sortArray } from '../components/helper';




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
localMovie.map( movie => (
<div className='card'>
<div>{movie.rank}</div>
<div> Title:{movie.title}</div>
<div> Year:{movie.year}</div>
<img src={movie.imgurl} />
<div> Description {movie.description} </div>
<div><button className="button btn-cta" onClick={this.handleBtnClk} >Watched</button></div>
<div><button className="button btn-cta" onClick={this.handleBtnClk} >Add to the list</button></div>
</div>
))
}
</div>
</div>
);
}
}
const mapStateToProps = state => {
return {
movies: state.movies,
}
}
const mapDispatchToProps = dispatch => {
return {
dispatchGetTopMovie(){
dispatch( getTopMovie() );
},
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Top50);


