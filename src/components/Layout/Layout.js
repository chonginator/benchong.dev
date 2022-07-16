import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { COLOURS } from "../../constants"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
        <MaxWidthWrapper>
            <Header />

            <MainWrapper>
                { children }
            </MainWrapper>

            <Footer />

            <GlobalStyle />
        </MaxWidthWrapper>
    )
}

const MainWrapper = styled.div`
    /* border: 5px solid blue; */
    display: grid;
    gap: 4em;
    padding-top: 4em;
`

const GlobalStyle = createGlobalStyle`
    /* Josh Comeau's CSS reset */
    /* https://www.joshwcomeau.com/css/custom-css-reset/ */

    /*
        1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /*
        2. Remove default margin
    */
    * {
        margin: 0;
    }

    /*
        3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
    }

    /*
        Typographic tweaks!
        4. Add accessible line-height
        5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
        6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /*
        7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }

    /*
        8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /*
        9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }

    /* My global styles */
    body {
        font-family: 'Barlow', sans-serif;
        font-size: 1.125rem;
        background-color: ${COLOURS.primary};
        color: ${COLOURS.text};
    }
`
export default Layout