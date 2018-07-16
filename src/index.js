import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import App from './App';
import Subpage from './Subpage';

const Main = () => {
	return (<Router>
						<Route path="/" component={App} />
					</Router>)
	}

ReactDOM.render(<Main />, document.getElementById('root'));




