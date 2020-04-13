import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
	if (!currentUser.isAuthenticated) {
		return (
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
	}
	return (
		<div>
			<MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username} />
		</div>
	);
};

export default Homepage;
