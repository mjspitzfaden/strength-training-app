import AppBar from 'material-ui/AppBar';
import {red700} from 'material-ui/styles/colors';
import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect}
  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListExampleFolder from './cover';
import MyForm from './myform';
import MyList from './list';
import startpng from './start.png';
import Picture from './picture';
import Nav from './nav';



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
  constructor(props) {
    super(props);
    this.state = {show_menu: false};
  }

  show_menu (event) {
    console.log('show');
    this.setState({show_menu: true});
  }

  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <Picture>
            <div>
              <AppBar onLeftIconButtonClick={(e) => this.show_menu(e)} iconElementLeft={this.state.show_menu ? <ListExampleFolder /> : <IconButton><MoreVertIcon /></IconButton> } title="Strength and Training"/>
              <Switch>
                <Route exact path="/" />
                <Route path="/add" component={MyForm}/>
                <Route path="/list" component={MyList}/>
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
