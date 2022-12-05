import React from 'react'
import styled from 'styled-components'
import DayComponent from './DayComponent'
import Total from './Total'

const Container = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 90%;
    background-color: #fffcf7;
    border-radius: 0.5rem;
    text-align: center;
`

const MainCharts = () => {
    return (
        <Container className="drop-shadow-lg">
            <h1 className="text-2xl pt-4 font-[700] text-[#382314]">
                Spending - Last 7 days
            </h1>
            <DayComponent />
            <hr className="m-auto w-[80%]" />
            <Total />
        </Container>
    )
}

export default MainCharts
