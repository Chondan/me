import React from 'react';

// Images
import img1 from '../assets/screenshots/pic1.jpg';
import img2 from '../assets/screenshots/pic2.jpeg';
import img3 from '../assets/screenshots/pic3.jpg';
import img4 from '../assets/screenshots/pic4.jpeg';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	imageFrame: {
		// border: '1px solid black',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		borderRadius: '0.25rem',
	},
	imageSlider: {
		width: '500%',
		height: '100%',
		// border: '1px solid red',
		margin: 0,
		animation: 'slidy 10s infinite',
	},
	image: {
		width: '20%',
		float: 'left',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: '100%'
	},
}));

const Image = ({
	className, src
}) => {
	return (
		<div style={{ backgroundImage: `url(${src})` }} className={className}>&nbsp;</div>
	);
}

const PhotoSlide = () => {

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

export default PhotoSlide;