import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {Link} from 'react-router-dom';
import startpng from './start.png';
import MyForm from './myform';
import Nav from './nav';
import './App.css';


const ListExampleFolder = () => (
<div className = "link">
     <Nav/>

    <Divider inset={true} />
    <Link to={'/list'}>
    <List>
      <Subheader inset={true}>Training</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightIcon={<ActionInfo />}
        primaryText="Workout Data"
        secondaryText="Jan 20, 2014"
      />
    </List>
    </Link>

</div>
);

export default ListExampleFolder;
