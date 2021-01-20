import React, { Fragment } from 'react';

const Skill = () => {
	return (
		<Fragment>
			<div className="font-yusei-magic padding-15">
				<div className="topic font-larger">Skills</div>
				<Fragment>
					<div className="font-large">Languages</div>
					<div className="font-smaller skill-item">
					- JavaScript, PHP, Python, C, C++, C#, Java, SQL, VBA
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Front-end</div>
					<div className="font-smaller skill-item">
					- ReactJS, Redux, CSS
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Back-end</div>
					<div className="font-smaller skill-item">
					- Node.js (Express), GraphQL, Socket.io
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Databases</div>
					<div className="font-smaller skill-item">
					- MySQL, MongoDB, Redis, Firebase
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Dev-Ops</div>
					<div className="font-smaller skill-item">
					- Docker, GitHub Actions, GCP
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Testing</div>
					<div className="font-smaller skill-item">
					- Jest, Puppeteer
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Operating System</div>
					<div className="font-smaller skill-item">
					- Linux
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Others</div>
					<div className="font-smaller skill-item">
					- Git, Webpack, SSH
					</div>
				</Fragment>
			</div>
		</Fragment>
	);
}

export default Skill;