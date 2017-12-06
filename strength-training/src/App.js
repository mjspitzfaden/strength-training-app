import AppBar from 'material-ui/AppBar';
import {red700} from 'material-ui/styles/colors';
import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect}
  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListExampleFolder from './cover';
import MyForm from './myform';
import MyList from './list';
import startpng from './start.png';
import Picture from './picture';



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
      <Provider store={store}>
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <Picture>
            <div>
              <AppBar title="Strength and Training"/>
              <Switch>

                <Route exact path="/" component={ListExampleFolder}/>
                <Route path="/add" component={MyForm}/>
                <Route path="/list" componet={MyList}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </Picture>
        </BrowserRouter>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
