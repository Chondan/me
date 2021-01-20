import React, { useState, useEffect, useRef, Fragment } from 'react';
import classnames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
	project: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		transition: 'all 0.3s ease',
		cursor: 'pointer',
		'&:hover': {
			boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3)'
		}
	},
	label: {
		backgroundColor: 'grey',
		padding: 5,
		opacity: 0.9,
		textAlign: 'right',
		fontWeight: 'bold',
		borderRadius: '0.25rem 0.25rem 0 0',
		cursor: 'default'
	}
}))

const Project = ({
	data
}) => {

	const { projectName, linkToWeb, linkToGithub, projectID } = data;
	const pic = require(`../assets/screenshots/project_${projectID}.gif`);
	const [width, setWidth] = useState(0);
	const classes = useStyles();
	const projectRef = useRef();

	// Set the height to be equal to the width
	useEffect(() => {
		const setProjWidth = () => setWidth(projectRef.current ? projectRef.current.clientWidth : 0);
		setProjWidth();
		window.addEventListener('resize', setProjWidth);
		return () => {
			window.removeEventListener('resize', setProjWidth);
		}
	}, []);

	const handleProjectClick = e => {
		projectRef.current.style.transform = `scale(0.8)`;
		setTimeout(() => {
			projectRef.current.style.transform = `scale(1)`;
			setTimeout(() => {
				window.open(linkToWeb || linkToGithub);
			}, 300);
		}, 300);
	}

	const handleLabelClick = e => {
		e.stopPropagation();
	}


	return (
		<Fragment>
			<div className={classnames(classes.project, 'card')} ref={projectRef} 
				style={{ height: width, backgroundImage: `url(${pic.default})` }} 
				onClick={handleProjectClick}
			>	
				<div className={classes.label} onClick={handleLabelClick}>{projectName} <CodeIcon /></div>
			</div>	
		</Fragment>
	);
}

export default Project;