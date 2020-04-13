import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.png';
import { Link } from 'react-router-dom';

const UserAside = ({ profileImageUrl, username }) => (
	<aside className="col-sm-2">
		<div className="panel panel-default">
			<ul className="user-options">
				<img
					width="200px"
					height="200px"
					src={profileImageUrl || DefaultProfileImg}
					alt={username}
					className="img-thumbnail"
				/>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="home"
						className="svg-inline--fa fa-home fa-w-18"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
					>
						<path
							fill="currentColor"
							d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
							class=""
						/>
					</svg>Home
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="bell"
						className="svg-inline--fa fa-bell fa-w-14"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M443.524 190.109l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109h-89.045l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L298.192 152h-111.24l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L138.192 152H44.86a12 12 0 0 0-11.813 9.891l-4.286 24C27.448 193.246 33.103 200 40.575 200h89.045l-20 112H16.289a12 12 0 0 0-11.813 9.891l-4.286 24C-1.123 353.246 4.532 360 12.003 360h89.045L82.139 465.891C80.826 473.246 86.481 480 93.953 480h24.38a12 12 0 0 0 11.813-9.891L149.808 360h111.24l-18.909 105.891c-1.313 7.355 4.342 14.109 11.813 14.109h24.38a12 12 0 0 0 11.813-9.891L309.808 360h93.331a12 12 0 0 0 11.813-9.891l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109H318.38l20-112h93.331a12 12 0 0 0 11.813-9.891zM269.62 312H158.38l20-112h111.24l-20 112z"
							class=""
						/>
					</svg>
					Explore
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="bell"
						className="svg-inline--fa fa-bell fa-w-14"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
						/>
					</svg>Notification
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="envelope"
						className="svg-inline--fa fa-envelope fa-w-16"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
						/>
					</svg>Messages
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="bookmark"
						className="svg-inline--fa fa-bookmark fa-w-12"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path
							fill="currentColor"
							d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
						/>
					</svg>Bookmark
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="list-alt"
						className="svg-inline--fa fa-list-alt fa-w-16"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"
						/>
					</svg>Lists
				</Link>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="user"
						className="svg-inline--fa fa-user fa-w-14"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
						/>
					</svg>Profile
				</Link>
			</ul>
		</div>
	</aside>
);

export default UserAside;
