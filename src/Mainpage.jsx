import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Mainpage extends Component {
	constructor (props) {
		super(props);
		this.state = { trusts: [] };
		this.listTrusts = this.listTrusts.bind(this);
	}

	componentDidMount () {
		this.fetchTrusts();
	}

	fetchTrusts () {
	  axios.get("/api/trusts")
	      .then(res => {
	        this.setState({trusts: res.data});
	      })
	      .catch(console.error);
	}

	listTrusts () {
		const trusts = this.state.trusts || [];
		let trustsList = [];
		trusts.map((trust, index) => {
			trustsList.push(<li key={index}>{trust.name}</li>)
		});
		console.log("trustsList", trustsList);
		return trustsList;
	}

	render () {
		return (<div>
							<h1>You made it to the Mainpage!</h1>
							<ul>
								{this.listTrusts()}
							</ul>
							<Link to="/subpage">Subpage it!</Link>
						</div>)
	}
}

export default Mainpage;