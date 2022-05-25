import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hello, my name is alston and i am a full stack developer! here is a sample of my other projects and this SPA
				</p>
	
			</div>
		</section>
	);
}

export default About;
