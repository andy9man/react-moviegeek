import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RefreshIndicator from 'material-ui/RefreshIndicator';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
export const movieGeekTheme = getMuiTheme({
  palette: {
    textColor: '#263238',
  },
  appBar: {
    height: 60,
    color: '#263238'
  },
  textField: {
    textColor: '#ECEFF1',
    hintColor: '#455A64',
    focusColor: '#607D8B'

  },
  raisedButton: {
    primaryColor: '#ECEFF1'
  },
  refreshIndicator: {
    color: '#263238',
    loadingStrokeColor: '#263238'
  }
});

export const Loader = props => {
  const size = props.size === undefined ? 60 : props.size;
  //const thickness = props.thickness === undefined ? 5 : props.thickness;
  return (
    <RefreshIndicator
      size={size}
      loadingColor="#263238"
      status="loading"
      left={10}
      top={0}
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    />
  );
}