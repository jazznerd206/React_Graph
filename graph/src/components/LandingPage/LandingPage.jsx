import React, { useState, useEffect } from 'react';
import { Page, Row, HiddenBonus } from '../../basics/basic.layout';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { theme } from '../../basics/basic.theme';
import { DropDownLi } from '../../basics/basic.layout';


function LandingPage(props) {

    console.log('props :>> ', props);

    return (
        <Page>
            <HiddenBonus>
                <LoadingAnimation />
            </HiddenBonus>
        </Page>
    )
}

export default LandingPage;
