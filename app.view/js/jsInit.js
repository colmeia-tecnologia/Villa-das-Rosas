/*
 * RESPONSIVIDADE
 */
skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large:  "(max-width: 1280px)",
    medium: "(max-width: 810px)",
    small:  "(max-width: 677px)",
    xsmall: "(max-width: 480px)"
});
skel.layout(
{
    reset:          "full",
    conditionals:   true,
    grid:           true,
    containers:     true,
    breakpoints: {
        xlarge: {
            containers: "75%"
        },
        large: {
            containers: "85%"
        },
        medium: {
            containers: "90%"
        }
    }
});