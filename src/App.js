import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
import Subpage from './Subpage';
import './App.css';

class App extends Component {
  render() {
    return (
        	<Switch>
        		<Route exact path="/" component={Mainpage} />
        		<Route path="/subpage" component={Subpage} />
        	</Switch>
    );
  }
}

export default App;
