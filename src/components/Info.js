import React, { Fragment } from 'react';

const Info = () => {
	return (
		<Fragment>
			<div className="font-yusei-magic padding-15">
				<div className="topic font-larger">Education</div>
				<Fragment>
					<div className="font-large">Bachelor of Engineering - Chulalongkorn University, Bangkok, Thailand.</div>
					<div className="font-smaller">08/2016 - 05/2020, GPA 3.25</div>
					<div className="font-smaller info-item">
					- Participated in the Preliminary Round of HSBC Thailand Business Case Competition 2020.
					</div>
					<div className="font-smaller info-item">
					- Head Coach of Intania Football Club.
					</div>
				</Fragment>
				<br/>
				<Fragment>
					<div className="font-large">Suankularb Wittayalai School, Bangkok, Thailand.</div>
					<div className="font-smaller">05/2013 - 03/2016, GPA 3.85</div>
					<div className="font-smaller info-item">
					- Participated in POST-Mathematical Camp.
					</div>
				</Fragment>
			</div>
			<hr/>
			<div className="font-yusei-magic padding-15">
				<div className="topic font-larger">Work Experience</div>
				<div>
					<div className="font-large">Robert Bosch Automotive Technologies (Thailand) Co., Ltd.</div>
					<div className="font-smaller">05/2019 - 11/2019 [Co-Operation Program]</div>
					<div className="font-smaller info-item">
					- Construct a mathematical model to find the best possible production plan that produces the 
					minimum production costs.
					</div>
					<div className="font-smaller info-item">- Design and develop a 'Digital Process Release Application' 
					to reduce either operation's workloads or paper usages on a shopfloor.
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Info;