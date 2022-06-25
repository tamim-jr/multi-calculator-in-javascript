//No.1: feet to mile calculator in jsvaScript

function feetToMile(feet) {
    var mile = (feet / 5280).toFixed(2);
    return mile;
}
var lohagaraToNarail = feetToMile(49212);
console.log("No.1 : The distance from Lohagarh to Narail is ", lohagaraToNarail, "miles.");

//No.2: wood calculator in javaScript

function woodCalculator(chair, table, bead) {
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBead = bead * 5;
    var result = totalChair + totalTable + totalBead;
    return result;
}

//Please write the number of chairs, tables and beds in this way and make sure to use a comma in the middle. Such as two chairs, a table, a bed = 2, 1, 2.

var totalChairTableBead = woodCalculator(14, 5, 12);
console.log("No.2: The total wood required for your chair table and bed is", totalChairTableBead, "cubic feet of wood.");


//No.3: brickCalculaor in javascript

function brickCalculaor(num) {
    if (num > 0 && num <= 10) {
        var result = num * 1000 * 15;
        console.log(result);
    } else if (num > 10 && num <= 20) {
        var firstTen = 10 * 15 * 1000;
        var result = (num - 10) * 12 * 1000 + firstTen;
        console.log(result);
    } else if (num > 20) {
        var firstTen = 10 * 15 * 1000;
        var secondTen = 10 * 12 * 1000;
        var result = (num - 20) * 10 * 1000 + firstTen + secondTen;
        console.log("No.3: Your total bricks is", result);
    }
}
var floor = brickCalculaor(48);

//No.4: tinyFriend find in array


function tinyFriend(arr) {
    var tiny = arr[0];
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (tiny.length > element.length) {
            tiny = element;
        }
    }
    return tiny;
}

var friend = ["Rohim", "Korim", "Bokkar", "Jobbar", "Noor"]
var smallFrind = tinyFriend(friend)

console.log("No.4: Your tiny friend name is", smallFrind)

