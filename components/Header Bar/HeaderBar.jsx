import React from 'react'
import styled from 'styled-components'
import creditIcon from '../../assets/designer/images/logo.svg'
const Container = styled.div`
    width: 90%;
    height: 6rem;
    margin: auto;
    margin-top: 3rem;
    border-top: 1px solid transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ec755d;
    border-radius: 0.5rem;
    color: white;
`
const Container_Info = styled.div`
    line-height: 2rem;
`
const Container_Icon = styled.div``
const Valor = styled.p`
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
`
const HeaderBar = () => {
    return (
        <Container className="drop-shadow-lg">
            <Container_Info>
                <p>My balance</p>
                <Valor>$921.48</Valor>
            </Container_Info>
            <Container_Icon>
                <img src={creditIcon} alt="Illustrative credit card icon" />
            </Container_Icon>
        </Container>
    )
}

export default HeaderBar
