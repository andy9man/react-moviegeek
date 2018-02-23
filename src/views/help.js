import React from 'react';
import Paper from 'material-ui/Paper';

const Help = props => {

  return (
    <div>
      <h3>Movie Geek Help</h3>
      <Paper style={{width: 'calc(100% - 45px)', margin: 15, paddingLeft: 30, paddingBottom: 30}} zDepth={2}>
        <div className="help">

          <h4>Welcome</h4>
          <p>We are glad to have you here on Movie Geek, sit back relax, take a look around.</p>

          <h4>Search</h4>
          <p>
            You can search for any movie you can think of using the Movie Geek search feature.
            Look through the results to find out more information about your movie.  If you signed
            up for an account, you'll be able to add it to your personal queue, or add it to your
            watched list.
          </p>

          <h4>Watched List / Movie Queue</h4>
          <p>
            Movie Geek allows you to add unlimited movies to your movie queue (movies you think are
            interesting and want to watch) & your Watched List (those movies you've already enjoyed).
            If you made a mistake, don't worry... you can always remove any movie from either list!
          </p>

          <h4>Movie Geek Score & Competition</h4>
          <p>
            Probably the most fun part of Movie Geek is the Movie Geek Score.  All movies on Movie
            Geek have a point value.  Those movies that you've marked as "Watched" get added to your
            Movie Geek Score... see how you rank with friends.  Don't ask about our Movie Geek algorithm,
            we won't tell...
          </p>

          <h4>Feeling Lucky & Watch of the Day</h4>
          <p>
            Movie Geek has a couple "hidden" features that you can explore... the random movie finder,
            if you are looking for a movie to watch and can't think of one, let us take the guess work
            out for you.
          </p>
          <p>
            Also, a daily movie flash watch which gives you extra points if you can find and watch it!
          </p>
        </div>
      </Paper>
    </div>
  );
}

export default Help;