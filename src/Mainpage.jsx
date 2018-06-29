import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mainpage extends Component {
	render () {
		return (<div>
							<h1>You made it to the Mainpage!</h1>
							<Link to="/subpage">Subpage it!</Link>
						</div>)
	}
}

export default Mainpage;