const colors = require("colors");
const { types } = require("./values");

// list coffee
module.exports = ()=>{
    console.log("\n");
    console.log(colors.underline(colors.bold("Coffee Menu")));
    console.log("-----------");

    types.forEach((type)=>{ 
        console.log(`${colors.bold(type.name)} ${colors.grey(`/ ${type.price}`)}`);
    });
    console.log("\n");
}