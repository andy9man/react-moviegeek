import React from 'react';
//import logo from '../assets/team-reaction-logo1.png';
import logo from '../assets/team-reaction-logo2.png';

const AboutUs = props => {

  return (
    <div>
      <div
        style={{
          width: '75%',
          margin: '0 auto',
          border: '#6fcf97 7px solid',
          borderRadius: 55,
        }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 50,
              border: '#9b51e0 3px solid',
              padding: 100,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img
              src={logo}
              alt="Team Reaction"
              style={{marginTop: -80, marginBottom: 20, display: 'block'}}
            />
            <hr />
            <div>
              <h1 style={{display: 'inline-block', color: '#6fcf97', margin: 5, whiteSpace: 'no-wrap'}}>&lt;Paul /&gt;</h1>
              <h1 style={{display: 'inline-block', color: '#9b51e0', margin: 5, whiteSpace: 'no-wrap'}}>&lt;Golbon /&gt;</h1>
              <h1 style={{display: 'inline-block', color: '#6fcf97', margin: 5, whiteSpace: 'no-wrap'}}>&lt;Andrew /&gt;</h1>
              <h1 style={{display: 'inline-block', color: '#9b51e0', margin: 5, whiteSpace: 'no-wrap'}}>&lt;Dan /&gt;</h1>
            </div>
        </div>
      </div>

      <p style={{display: 'block', textAlign: 'center', fontSize: '0.8em'}}>Movie Artwork and Data Courtesy of <a href="http://www.omdbapi.com/" target="_new">OMDb API</a></p>
    </div>

  );
}

export default AboutUs;