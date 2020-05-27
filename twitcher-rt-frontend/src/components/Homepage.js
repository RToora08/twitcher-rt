import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
	<div className="home-hero">
		<div className="welcomeMsg">
			<span>Welcome </span>
			<span className="twit">T</span>
			<span className="oo">o</span>
		</div>
		<span className="twit">Twitcher</span>
		<Link to="/signup" className="signupBtn btn btn-primary">
			Sign Up Here
		</Link>
	</div>
);

export default Homepage;
