import React, { Fragment } from 'react';

// Datas
import skills from '../datas/skills.json';

const Skill = () => {
	return (
		<Fragment>
			<div className="font-yusei-magic padding-15">
				<div className="topic font-larger">Skills</div>
				{
					skills.map(skill => (
						<Fragment>
							<div className="font-large">{skill.type}</div>
							<div className="font-smaller skill-item">
								- {skill.items.join(', ')}
							</div>
							<br/>
						</Fragment>
					))
				}
			</div>
		</Fragment>
	);
}

export default Skill;