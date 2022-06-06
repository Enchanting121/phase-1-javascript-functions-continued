function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();
mondayWork("I will work from home");

function wrapAdjective(type = "*") {
    return function(unique = "special") {
        return (`You are ${type}${unique}${type}!`);
    };
}
wrapAdjective('||');