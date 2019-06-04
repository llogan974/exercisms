export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

// Export the required variable. Unchanging, so use CONST. 

// Practicing my ES6 arrow functions.
// "colorstring" is the string variable being received from resistor-color.spec

export const colorCode = colorString => {
    // No implicit return, must add "return"
    return COLORS.indexOf(colorString);
}
