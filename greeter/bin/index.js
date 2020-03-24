#!/usr/bin/env node

const colors = require("colors");
const greet = require("../lib/greet");

let args = process.argv.splice(2);

let lang = null;

if(args[0] == '--lang'){
    lang = args[1];
}

if(lang != null){
    console.log(
        colors.america(
            greet.greet(lang)
        )
    );
}else{
    console.log(
        colors.rainbow(
            greet.greetRandom()
        )
    );
}
