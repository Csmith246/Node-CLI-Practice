const _ = require("lodash");

const GREETINGS = {
    en: "Good Morning",
    de: "Guten Morgen",
    fr: "Bonjour",
    ru: "Dobre Utra",
    kr: "Annyeonghaseyo"
};

exports.greet = function(code) {
    if (code){
        let greeting = GREETINGS[code];
        if(!greeting){
            return "Error! We don't support this lang!";
        }else{
            return greeting;
        }
    }else{ // default
        return GREETINGS['en'];
    }
}

exports.greetRandom = function(){
    return _.sample(_.values(GREETINGS));
}