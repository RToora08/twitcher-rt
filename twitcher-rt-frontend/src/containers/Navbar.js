import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'; // for client side routing
import { connect } from 'react-redux'; // to connect to store
import brandLogo from '../images/brand-logo.svg';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light justify-content-between fixed-top">
				<div className="navbar-brand">
					<Link to="/" className="navbar-brand">
						<img src={brandLogo} alt="Twitcher" />
					</Link>
				</div>
				<div>
					<ul className="nav links float-right">
						<li>
							<NavLink to="/signup">Sign Up</NavLink>
						</li>
						<li>
							<NavLink to="/signin">Log In </NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

// But if the user is logged in the we don't need to
// show signup and log in
//
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps, null)(Navbar);
