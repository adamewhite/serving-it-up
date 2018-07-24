import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Mainpage extends Component {
	constructor (props) {
		super(props);
		this.state = { trusts: [], sites: [] };
		this.listTrusts = this.listTrusts.bind(this);
		this.listSites = this.listSites.bind(this);
	}

	componentDidMount () {
		this.fetchTrusts();
		this.fetchSites();
	}

	fetchTrusts () {
	  axios.get("/api/trusts")
	      .then(res => {
	        this.setState({trusts: res.data});
	        console.log("successful trusts", res);
	      })
	      .catch(error => {
	      	console.log(error);
	      	console.log("not working girl");
	      });

      // Client.search(trusts => {
      //   this.setState({
      //     trusts: trusts
      //   });
      // });
	}

		fetchSites () {
			console.log("fetching sites");
		  axios.get("/api/sites")
		      .then(res => {
		        this.setState({sites: res.data.sites});
		        console.log("successful sites", res);
		      })
		      .catch(error => {
		      	console.log(error);
		      	console.log("not working girl on sites over here");
		      });

	      // Client.search(trusts => {
	      //   this.setState({
	      //     trusts: trusts
	      //   });
	      // });
		}

	listTrusts () {
		const trusts = this.state.trusts || [];
		let trustsList = [];
		trusts.map((trust, index) => {
			trustsList.push(<li key={index}>{trust.name}</li>)
		});
		// console.log("trustsList", trustsList);
		return trustsList;
	}

	listSites () {
		const sites = this.state.sites || [];
		console.log("sitesList", sites);
		let sitesList = [];
		sites.map((site, index) => {
			sitesList.push(<li key={index}>{site.name} - {site.trust_id}</li>)
		});
		// console.log("trustsList", trustsList);
		return sitesList;
	}

	render () {
		console.log("sites state", this.state.sites);
		return (<div>
							<h1>You made it to the Mainpage!</h1>
							<h1>Sites!</h1>
							<ul>
								{this.listSites()}
							</ul>
							<h1>Trusts!</h1>
							<ul>
								{this.listTrusts()}
							</ul>
							<Link to="/subpage">Subpage it!</Link>
						</div>)
	}
}

export default Mainpage;