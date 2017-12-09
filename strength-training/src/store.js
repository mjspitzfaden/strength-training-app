import { createStore } from 'redux';
import contacts from './reducers';
import {loggedIn, retrieved, initContact, loggedOut} from './actions';
import database, {user} from './database';
import * as firebase from "firebase";
var store = createStore(contacts);

function save_to_firebase () {
  var state = store.getState();

  // state.contacts
  // save to firebase
  if (state.user.uid && state.retrieved_contacts) {
    database.ref('contacts/' + state.user.uid).set(state.contacts);
  }
}

var UNSUBSCRIBE = null;

firebase.auth()
  .onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      store.dispatch(loggedIn(user));

      database.ref('contacts/' + user.uid)
      .once('value').then((contacts) => {
        console.log(contacts.val());
        store.dispatch(initContact(contacts.val() || []));
        store.dispatch(retrieved());
        UNSUBSCRIBE = store.subscribe(save_to_firebase);
      });
    } else {
      // dispatch logout action
      // store.subscribe(save_to_firebase);
      if (UNSUBSCRIBE) {
        UNSUBSCRIBE();
        UNSUBSCRIBE = null;
      }
      store.dispatch(initContact([]));
      store.dispatch(loggedOut());

    }
  });


export default store;
