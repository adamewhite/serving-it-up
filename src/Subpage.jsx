import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Subpage extends Component {
	render () {
		return (<div>
							<h1>You made it to the subpage!</h1>
							<Link to="/">Mainpage it!</Link>
						</div>)
	}
}

export default Subpage;