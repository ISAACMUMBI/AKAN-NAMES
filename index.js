let button = document.getElementById("akan_name")
button.addEventListener('click',getName)


function getName() {
    let date = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let display = document.getElementById("akan_Name");
    let gender = document.getElementById("gender")

    let dateOfBirth = month + '/' + date + '/' + year;
    let newDate = new Date(dateOfBirth)
    let dayOfWeek = newDate.getDay()
    console.log(dateOfBirth);
    console.log(newDate)
    console.log(dayOfWeek)
   
    let index = dayOfWeek;
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





// // function getName (){
// //     var dateobject = new date(date)
// // var day = dateobject.getdate();
// //      let Female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
// //  let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
// //     let display = document.getElementById("akan_Name");
// //   let gender = document.getElementById("gender")
// //     if(day != null && gender != null){
// //         if (gender === "Male"){
// //             AkanName = Male[day]
// //         }
// //     }
// //     else{
// //         AkanName= Female[day]
// //     }
// //         display.innerHTML = `<h1>Your name is ${AkanName}</h1>`;
// // console.log(AkanName)
// //     }

// function onClick (){
//     alert(date)
// }