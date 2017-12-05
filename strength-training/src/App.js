import AppBar from 'material-ui/AppBar';
import {red700} from 'material-ui/styles/colors';
import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect}
  from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListExampleFolder from './cover';
import MyForm from './myform';


import './App.css';

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});

const NoMatch = ({location}) => (
  //location = props.location;
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <div>
            <AppBar title="Strength and Training"/>

            <Switch>
              <Route exact path="/" component={ListExampleFolder}/>
              <Route path="/add" component={MyForm}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
