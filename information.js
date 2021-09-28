const wilder = {
    name: "Arnaud",
    campus: "Paris",
};
const cowsay = require("./node_modules/cowsay");

function displayMessage() {
    console.log(cowsay.say({
        text: `Hello, I'm ${wilder.name} & I'm in the ${wilder.campus} campus`,
        e: "oO",
        T: "U ",
    }))
}

module.exports = {
    wilder,
    displayMessage: displayMessage,
};
