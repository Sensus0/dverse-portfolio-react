import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/sensus0/dverse-budget-tracker',
			deployed: 'https://dverse-pwa.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'THe weather dashboard displays the current weather and a five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Sensus0/weather-app',
			deployed: 'https://sensus0.github.io/weather-app/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a random password between  8 and 128 characters.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/sensus0/password-generator',
			deployed: 'https://sensus0.github.io/password-generator/',
		},
		{
			name: 'Note Taker',
			description:
				'An application that allows users to enter, save and delete notes.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/sensus0/note-taker',
			deployed: 'https://sensus0.github.io/note-taker/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
