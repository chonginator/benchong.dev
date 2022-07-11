import React from "react"
import styled from "styled-components"
import { QUERIES } from "../../constants"

const MaxWidthWrapper = styled.div`
    border: 5px solid yellow;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding: 1.25em 1.5em;

    @media ${QUERIES.laptopAndUp} {
        padding: 2em 7em;
    }
`

export default MaxWidthWrapper