//feet to mile calculator in jsvaScript

function feetToMile(feet){
    var mile = (feet / 5280).toFixed(2);
    return mile;
}
var lohagaraToNarail = feetToMile(49212);
console.log("The distance from Lohagarh to Narail is ", lohagaraToNarail, "miles.");

//wood calculator in javaScript

function woodCalculator(chair, table, bead){
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBead = bead * 5;
    var result = totalChair + totalTable + totalBead;
    return result;
}

//Please write the number of chairs, tables and beds in this way and make sure to use a comma in the middle. Such as two chairs, a table, a bed = 2, 1, 2.

var totalChairTableBead = woodCalculator(14, 5, 12);
console.log("The total wood required for your chair table and bed is", totalChairTableBead, "cubic feet of wood.");
