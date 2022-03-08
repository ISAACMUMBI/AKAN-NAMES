let date = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let button = document.getElementById("akan_name")


function calculateDay() {

    let CC = year.value.slice(0, 2);
    let YY = year.value.slice(2,4);
    let MM = month.value;
    let DD = date.value;
    let d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

    return d.toFixed();


}

