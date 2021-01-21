import React, { useState, useEffect, useRef, Fragment } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import { Project, Pagination } from './';

// Datas
import projects from '../datas/projects.json'

const useStyles = makeStyles((theme) => ({
	projectGallery: {
		height: '100%',
		display: 'grid',
		justifyContent: 'center',
		alignContent: 'center',
		position: 'relative',
		gridGap: '10px 10px',
		borderRadius: '0.25rem'
	},
	pagination: {
		position: 'absolute',
		top: '2%',
		left: '2%',
		cursor: 'pointer',
	}
}))

const ProjectGallery = () => {

	const cardSize = 250;
	const classes = useStyles();
	const galleryRef = useRef();
	const [galleryHeight, setGalleryHeight] = useState(0);
	const [galleryWidth, setGalleryWidth] = useState(0);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);

	const calculateNumberOfItems = (size) => {
		return Math.floor(galleryHeight/size) * Math.floor(galleryWidth/size)
	}

	const getProjectsArray = () => {
		return projects.slice((currentPage - 1) * calculateNumberOfItems(cardSize), currentPage * calculateNumberOfItems(cardSize));
	}

	const onPageChanged = page => setCurrentPage(page);

	useEffect(() => {
		const setHeight = () => setGalleryHeight(galleryRef.current.clientHeight);
		const setWidth = () => setGalleryWidth(galleryRef.current.clientWidth);
		const setup = () => {
			setHeight();
			setWidth();
			// setCurrentPage(1);
		}
		setup();
		window.addEventListener('resize', setup);
		return () => {
			window.removeEventListener('resize', setup);
		}
	}, []);

	return (
		<Fragment>
			<div className={classes.projectGallery} ref={galleryRef}
				style={{ gridTemplateColumns: `repeat(auto-fill, ${cardSize}px`}}
			>
				<Fragment>
					{
						getProjectsArray().map((project, index) => (
							<Project key={index} data={project} />
						))
					}
					{
						calculateNumberOfItems(cardSize) > 0 &&
						<div className={classes.pagination}>
							<Pagination totalRecords={projects.length} pageNeighbours={1} pageLimit={calculateNumberOfItems(cardSize)}
								onPageChanged={onPageChanged} currentPage={currentPage}
							 />
						</div>
					}
				</Fragment>
			</div>
		</Fragment>
	);
}

export default ProjectGallery;