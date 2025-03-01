import React from 'react';
import {
    Container,
    HeroContainer,
    Image
} from '../StyledComponents/StyledComponents';

const SSHero = (props) => {
    return(
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2}}
            exit={{ opacity: 0 }}
        >
            <div>
                <Container center bottom={3}>
                    <Image src={props.image} />
                </Container>
            </div>
        </HeroContainer>
    )
}

export default SSHero;
