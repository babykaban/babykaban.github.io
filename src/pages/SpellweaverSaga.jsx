import React from 'react';
import {
	BodyContainer,
} from '../components/StyledComponents/StyledComponents';

import Navigation from '../components/Navigation/Navigation.jsx';
import SSHero from '../components/Project/ProjectHero.jsx';
import SSDescription from '../components/Project/ProjectDescription.jsx';
import SSArticles from '../components/Project/ProjectArticles.jsx';

import Footer from '../components/Footer/Footer.jsx';

import spellweaver_saga_content from '../projects/spellweaver_saga.md';
import heroImg from '../assets/img/project_img0.png';

const SpellweaverSaga = () => {

    return (
		<>
			<Navigation page="spellweaver-saga" />
			<BodyContainer>
				<SSHero image={heroImg}/>
                <SSDescription title={"Spelweaver Saga"}
                               content={spellweaver_saga_content}/>
                <SSArticles categories={["Spellweaver Saga", "Editor"]}/>
			</BodyContainer>
			<Footer />
		</>
    );
}

export default SpellweaverSaga;