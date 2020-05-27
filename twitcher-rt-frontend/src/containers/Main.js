import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // to connect to redux store
import Homepage from '../components/Homepage';

const Main = (props) => {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
			</Switch>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default withRouter(connect(mapStateToProps, null)(Main));
// withRouter will allow to get the props from the router
