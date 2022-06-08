// code your solution here
function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`;
}


let mondayWork = function (string = "go to the office"){
    return `This Monday, I will ${string}.`;
}


function mondayWork(string){
    return `This Monday, I will ${string}.`;
}
mondayWork('go to the office');

const wrapAdjective = function(val = "*"){
    return function (attribute = "special"){
        return `You are ${val}${attribute}${val}!`;
    }
}
