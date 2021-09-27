const wilderInfo = require('./userInformation');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${wilderInfo.wilder.name} from the ${wilderInfo.wilder.campus} campus.`,
    e : "oO",
    T : "U "
}));