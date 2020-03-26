import React, { Component } from 'react';
import styled from 'styled-components';

import webLogo from '../webhook.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand'
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://sambarros.com">
                <img src={webLogo} width="50" height="50"/>
            </Wrapper>
        )
    }
}

export default Logo;