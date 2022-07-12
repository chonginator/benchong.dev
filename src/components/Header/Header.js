import React from "react"
import styled from "styled-components"

import Button from "../Button"
import { QUERIES } from "../../constants"

const Header = () => {
    return (
        <Wrapper>
            <Button href='/resume.pdf'>Resume</Button>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    /* border: 5px solid yellow; */
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    padding-top: 1.25em;
    z-index: 1;

    @media ${QUERIES.laptopAndUp} {
        /* margin-top: 2em; */
    }
`

export default Header