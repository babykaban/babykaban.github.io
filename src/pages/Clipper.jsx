import React from 'react';
import {
	BodyContainer,
} from '../components/StyledComponents/StyledComponents';

import Navigation from '../components/Navigation/Navigation.jsx';
import ClipperHero from '../components/Project/ProjectHero.jsx';
import ClipperDescription from '../components/Project/ProjectDescription.jsx';
import ClipperArticles from '../components/Project/ProjectArticles.jsx';

import Footer from '../components/Footer/Footer.jsx';

import clipper_content from '../projects/clipper_library.md';
import heroImg from '../assets/img/clipper_logg.png';

const ClipperLibrary = () => {

    return (
		<>
			<Navigation page="clipper" />
			<BodyContainer>
				<ClipperHero image={heroImg}/>
                <ClipperDescription title={"Clipper Library"}
                               content={clipper_content}/>
                <ClipperArticles categories={["Clipper2"]}/>
			</BodyContainer>
			<Footer />
		</>
    );
}

export default ClipperLibrary;