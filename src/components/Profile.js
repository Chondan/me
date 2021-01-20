import React from 'react';

// Images
import pic1 from '../assets/screenshots/project_1.gif';
import img1 from '../assets/screenshots/pic1.jpg';
import img2 from '../assets/screenshots/pic2.jpeg';
import img3 from '../assets/screenshots/pic3.jpg';
import img4 from '../assets/screenshots/pic4.jpeg';
import profileIcon from '../assets/screenshots/profile.jpg';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	imageFrame: {
		// border: '1px solid black',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},
	imageSlider: {
		width: '500%',
		height: '100%',
		// border: '1px solid red',
		margin: 0,
		animation: 'slidy 10s infinite',
	},
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
		boxShadow: '2px 2px 4px black'
	},
	image: {
		width: '20%',
		float: 'left',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: '100%'
	}
}))

const Image = ({
	className, src
}) => {
	return (
		<div style={{ backgroundImage: `url(${src})` }} className={className}>&nbsp;</div>
	);
}

const AnimationSlide = () => {

	const classes = useStyles();

	return (
		<div className={classes.imageFrame}>
			<figure className={classes.imageSlider}>
				<Image className={classes.image} src={img1} />
				<Image className={classes.image} src={img2} />
				<Image className={classes.image} src={img3} />
				<Image className={classes.image} src={img4} />
				<Image className={classes.image} src={img1} />
			</figure>
		</div>
	);
}

const Icon = () => {

	const classes = useStyles();

	return (
		<div className={classes.icon} />
	);
}

const Profile = () => {

	const classes = useStyles();

	return (
		<div className={classes.profile}>
			<AnimationSlide />
			<Icon />
		</div>
	);
}

export default Profile;