import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Image,
    Container,
    CaseLink,
    CaseStudyContainer,
    CaseStudyContent
} from '../StyledComponents/StyledComponents';
import { ClientText } from "./Style";
import Button from '../Utility/Button';
import { Fade } from 'react-awesome-reveal';

const CaseStudyImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

const Project = (props) => {
    return (
        <Fade direction="top" duration={200} triggerOnce cascade>
            <CaseLink as={Link} to={props.route} target={props.newTab ? '_blank' : null}>
                <CaseStudyContainer>
                    <CaseStudyContent>
                        <Container flexRow leftAlign>
                            <ClientText>{props.date}</ClientText>
                        </Container>
                        
                        <div>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>

                        <Button
                            right
                            text="Read More"
                            route={props.route}
                        />
                    </CaseStudyContent>
                    <CaseStudyImage background={props.color}>
                        <Image src={props.thumbnail}/>
                    </CaseStudyImage>
                </CaseStudyContainer>
            </CaseLink>
        </Fade>
    );
}

export default Project;