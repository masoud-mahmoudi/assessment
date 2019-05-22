import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/header/header';
import ListPage from './pages/listPage/listPage';
import DetailPage from './pages/detailPage/detailPage';


const styles = {
  root: {
    flexGrow: 1,
  }
};
class App extends Component {


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
