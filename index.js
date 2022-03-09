let date = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let button = document.getElementById("akan_name")


// function calculateDay() {

//     let CC = year.value.slice(0, 2);
//     let YY = year.value.substring(2);
//     let MM = month.value;
//     let DD = date.value;
//     let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
//     console.log(d)
//     return d.toFixed();


// }

function getName() {
    let display = document.getElementById("akan_Name");
    let gender = document.getElementById("gender")
   
    let index = calculateDay();
    let Female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    if (gender.value == "Female") {
        let female_name = Female[index]
        display.innerHTML = `<h1>Your name is ${female_name}</h1>`;
    } else if (gender.value == "Male") {
        let male_name = Male[index]
        display.innerHTML = `<h1>Your name is ${male_name}</h1>`;
    }
}



button.addEventListener('click', function (e) {
    e.preventDefault();

    getName();
})



// function getName (){
//     var dateobject = new date(date)
// var day = dateobject.getdate();
//      let Female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
//  let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
//     let display = document.getElementById("akan_Name");
//   let gender = document.getElementById("gender")
//     if(day != null && gender != null){
//         if (gender === "Male"){
//             AkanName = Male[day]
//         }
//     }
//     else{
//         AkanName= Female[day]
//     }
//         display.innerHTML = `<h1>Your name is ${AkanName}</h1>`;
// console.log(AkanName)
//     }

button.addEventListener('click', function (e) {
    e.preventDefault();

    getName();
})