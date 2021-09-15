import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Page, Row, HiddenBonus, I, LandingTitle } from '../../basics/basic.layout';
import { Flash } from '../../basics/basic.keyframes';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';


function LandingPage(props) {

    return (
        <Page>
            {/* <HiddenBonus>
                <LoadingAnimation query={props.query} chooseIndex={props.chooseIndex} />
            </HiddenBonus> */}
            <Row>
                <LandingTitle>stock with intent</LandingTitle>
                <Flash>
                    <Link style={{color: "inherit"}} smooth to="#content">
                        <I className="fas fa-chevron-down fa-1x"></I>
                    </Link>
                </Flash>
            </Row>
        </Page>
    )
}

export default LandingPage;
