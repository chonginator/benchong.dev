export const COLOURS = {
    primary: 'hsl(60deg, 100%, 100%)',
    secondary: 'hsl(240deg, 35%, 87%)',
    tertiary: '	hsl(0deg, 72%, 62%)',
    text: 'hsl(234deg, 95%, 57%)'
}

export const WEIGHTS = {
    normal: 400,
    bold: 700
}

export const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 990,
}

export const QUERIES = {
    tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`
}