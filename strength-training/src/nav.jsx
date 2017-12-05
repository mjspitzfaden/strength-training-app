import MyList from './list';
import MyDelete from './delete';
import React, { Component } from 'react';
import {loggedIn} from './actions.js';






class Nav extends Component {
  constructor(props) {
    super(props);
  }

  login () {
    auth()
      .then((user) => {
        console.log(user);
        //this.setState({logged_in: true});
      })
      .catch(function (e) {
        console.log(e);
      });
  }

log_out(){
  firebase.auth().signOut().then(() => {
    console.log("log out sucessfull");
    //let tempstate = !this.state.logged_in;
    //this.setState({logged_in: tempstate});
    this.props.logout();
  }).catch(function(error) {
    console.log("log out failed", error);
  });
}



  auth_button () {
    if (this.props.user.uid) {
      return <button onClick={() => this.log_out()}>Logout</button>
    }

    return <button onClick={() => this.login()}>Login</button>
  }

  render() {
    return (
      <ul>
        <li><Link to="/">List</Link></li>
        <li><Link to="/add">Add Form</Link></li>
        <li>{this.auth_button()}</li>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: function (data) {
      dispatch(loggedIn(data));
    },
    logout: function () {
      dispatch(loggedOut());
      dispatch(removeUser());
    }
  }
}
