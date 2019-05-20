import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './components/header/header';
import ListPage from './pages/listPage/listPage';
import DetailPage from './pages/detailPage/detailPage';


function Home() {
  return <h2>Home</h2>;
}
const styles = {
  root: {
    flexGrow: 1,
  }
};
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {classes} =  this.props;
    return (
      <Router>
        <div className='classes.root'>
          <Header/>
          <Switch>
            <Route exact path='/' component={ListPage}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/detail/:id' component={DetailPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
