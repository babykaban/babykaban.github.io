import React from 'react';
import {
	BodyContainer,
} from '../components/StyledComponents/StyledComponents';

import Navigation from '../components/Navigation/Navigation.jsx';
import SSHero from '../components/Project/ProjectHero.jsx';
import SSDescription from '../components/Project/ProjectDescription.jsx';
import SSArticles from '../components/Project/ProjectArticles.jsx';

import Footer from '../components/Footer/Footer.jsx';

import golf_balls_adventure_content from '../projects/golf_balls_adventure.md';
import heroImg from '../assets/img/project_img0.png';

const GolfBallsAdventure = () => {

    return (
		<>
			<Navigation page="golfballs-adventure" />
			<BodyContainer>
				<SSHero image={heroImg}/>
                <SSDescription title={"Golf Balls Machine Project"}
                               content={golf_balls_adventure_content}/>
                <SSArticles categories={["GolfBalls"]}/>
			</BodyContainer>
			<Footer />
		</>
    );
}

export default GolfBallsAdventure;