import React, { useState } from 'react';

// Images
import profileIcon from '../assets/screenshots/profile1.png';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';

// Components
import { Contact, PhotoSlide } from './';

const useStyles = makeStyles((theme) => ({
	profile: {
		// border: '1px solid blue',
		position: 'relative',
		height: '100%'
	},
	icon: {
		position: 'absolute',
		width: 100,
		height: 100,
		borderRadius: '50%',
		bottom: '5%',
		left: '5%',
		backgroundImage: `url(${profileIcon})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxShadow: '2px 2px 4px black',
		zIndex: 10,
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.05)'
		},
		transition: 'all 0.1s ease'
	},
}));

const Icon = ({
	onClick
}) => {

	const classes = useStyles();

	return (
		<div className={classes.icon} onClick={onClick} />
	);
}

const Profile = () => {

	const classes = useStyles();
	const [show, setShow] = useState(false);

	const onIconClick = () => setShow(state => !state);

	return (
		<div className={classes.profile}>
			<PhotoSlide />
			<Icon onClick={onIconClick} />
			<Contact show={show} />
		</div>
	);
}

export default Profile;