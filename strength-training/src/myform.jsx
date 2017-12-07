import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {addContact, updateContact} from './actions.js';
import { connect } from 'react-redux';
import uid from 'uid'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import database, {User} from './database';


class MyFormComponent extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    //this.check_login();
    console.log(this.props.user)

    this.index = null;
    if (this.props.match.params.id) {
      this.index = this.props.match.params.id;
      this.state = {...this.props.contacts[this.index]};
    } else {
      this.state = {
        key: uid(), userId: "", date: 'NONE', exersise: 'NONE', weight: 'lbs', distance:'', time: 'number',
      };
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.user)
  }



  update_state(event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }




  handle_submit(event) {

    console.log('Submitted:' , this.state.userId, this.state.date, this.state.exersise, this.state.weight, this.state.distance, this.state.time);

    event.preventDefault();

    this.props.onSubmit({key: uid(), userId: this.state.userId, date: this.state.date, exersise: this.state.exersise, weight: this.state.weight, distance: this.state.distance, clicked: false});
    this.props.history.push("/");
  }

updateExersise(event) {
    console.log(this.index, this.state);
    this.props.onChange(this.index, {...this.state});
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="card">
        <Card className="md-card">
          <form onSubmit={event => this.handle_submit(event)}>
            <CardTitle title="Workout Form" subtitle=""/>
            <CardText>
              <TextField floatingLabelText="User Id"
                defaultValue={this.state.userId}
                onChange={event => this.update_state(event, 'userId')}/>
              <TextField floatingLabelText="date"
                defaultValue={this.state.date}
                onChange={event => this.update_state(event, 'date')}/>
              <TextField floatingLabelText="Exersise"
                defaultValue={this.state.exersise}
                onChange={event => this.update_state(event, 'exersise')}/>
              <TextField floatingLabelText="weight"
                defaultValue={this.state.weight}
                onChange={event => this.update_state(event, 'weight')}/>
              <TextField floatingLabelText="reps"
                defaultValue={this.state.reps}
                onChange={event => this.update_state(event, 'reps')}/>
              <TextField floatingLabelText="distance"
                defaultValue={this.state.distance}
                onChange={event => this.update_state(event, 'distance')}/>
              <TextField floatingLabelText="time"
                defaultValue={this.state.time}
                onChange={event => this.update_state(event, 'time')}/>

            </CardText>
            <CardActions>
              <RaisedButton type="submit" label="Add" primary={true}/>
              <RaisedButton label="Update" primary={true} onClick={event => this.updateExersise(event)}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}



function mapStateToProps (state) {
  return {
    contacts: state.contacts,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (data) {
      dispatch(addContact(data));
    },
    onChange: function (index, data) {
      dispatch(updateContact(index, data));
    }
  }
}

var MyForm = connect(
  mapStateToProps, mapDispatchToProps
)(MyFormComponent);

export default MyForm;
