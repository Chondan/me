import React from 'react';
import classnames from 'classnames';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	contact: {
		position: 'absolute',
		transition: 'all 0.4s ease',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
		padding: 15,
		textAlign: 'right',
		fontWeight: 'bold',
		overflowY: 'auto'
	},
}));

const Contact = ({
	show
}) => {

	const classes = useStyles();

	return (
		<div className={classnames(classes.contact, 'font-yusei-magic')} style={{ transform: `scale(${show ? 1 : 0})`}}>
			<div style={{ fontSize: 'xx-large' }}>Chondan Susuwan</div>
			<div>Birthday</div><div className="font-larger">27/01/1998</div>
			<div>Phone</div><div className="font-larger">085-343-8104</div>
			<div>Email</div><a href="mailto:chondansusuwan@outlook.com" className="font-larger email">chondansusuwan@outlook.com</a>
		</div>
	);
}

export default Contact;