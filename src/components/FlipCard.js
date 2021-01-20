import React, { useState } from 'react';
import classnames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import { Info, Skill } from './';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 4,
	height: '55vh',
  },
}));

const Card = ({
	onClick, className, children
}) => {
	return (
		<div onClick={onClick} className={className}>
			{children}
		</div>
	);
}


const FlipCard = () => {

	const classes = useStyles();

	const [flip, setFlip] = useState(false);
	const handleFlip = () => setFlip(state => !state);

	return (
		<div className={classnames(classes.card, 'flip-card', `${flip ? 'flip' : ''}`)}>
			<Card onClick={handleFlip} className="front">
				<Info />
			</Card>
			<Card onClick={handleFlip} className="back">
				<Skill />
			</Card>
		</div>
	);
}

export default FlipCard;