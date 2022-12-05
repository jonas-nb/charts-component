import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    margin-top: 1rem;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
`
const Total = () => {
    return (
        <Container>
            <div className="flex flex-col items-start">
                <p className="text-sm">Total this month</p>
                <p className="text-2xl font-[700] text-[#382314]">$478.33</p>
            </div>
            <div>
                <p className="text-right pt-10 font-[700] text-[#382314]">
                    +2.4%
                </p>
                <p className="text-sm ">from last month</p>
            </div>
        </Container>
    )
}

export default Total
