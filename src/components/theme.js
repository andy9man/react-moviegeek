import getMuiTheme from 'material-ui/styles/getMuiTheme';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const movieGeekTheme = getMuiTheme({
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
});

export default movieGeekTheme