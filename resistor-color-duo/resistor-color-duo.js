export const value = ((colors) => {

    // Destructure the items passed in
    const [color1, color2] = colors;

    // Create the COLORS object
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    // Get the index of color1 and color2, pass in as an array in order to concatenate
    let colorValues = [[COLORS.indexOf(color1)], [COLORS.indexOf(color2)]];

    // Join the arrays, and parseInt to convert
    return parseInt(colorValues.join(''));


})