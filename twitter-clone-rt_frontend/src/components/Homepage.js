import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
	<div className="home-hero">
		<div className="welcome-message">
			<div>Welcome To</div>

			<div>Twitcher</div>
		</div>
		<Link to="/signup" className="btn btn-primary">
			Sign Up here
		</Link>
	</div>
);

export default Homepage;
