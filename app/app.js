function initListners() {
    // console.log("hello world");

    $("#submit").click((e) => {
        e.preventDefault();
        let allStudents = JSON.parse(localStorage.getItem("Student"));
        let name = $("#name").val();
        let age = $("#age").val();
        let phone = $("#phone").val();
        let email = $("#email").val();
        let classes = $("#classes").val();

       // console.log(name + ' ' + age + ' ' + phone + ' ' + email + ' ' + classes);
       if(name != '' && age != '' && phone != '' && email != '' && classes != '') {
        let studentObj = {
            fullName: name,
            age: age,
            phoneNumber: phone,
            emailAddress: email,
            classList: classes,
        };
        //console.log("This has been put into the object");
        allStudents.push(studentObj);
        console.log(allStudents);

        localStorage.setItem("Student", JSON.stringify(allStudents));
        $("#name").val("");
        $("#age").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#classes").val("");
        
       } else {
        alert("Please enter the required information");
       }
        
    });

    $("#getStudents").click((e) => {
        e.preventDefault();
        $("#app").html("");
        let allStudents = JSON.parse(localStorage.getItem("Student"));
        console.log(allStudents);
        $.each(allStudents, function (idx, student) {
            $("#app").append(`<p>${student.fullName} / ${student.age} / ${student.phoneNumber} / ${student.emailAddress} / ${student.classList}</p> <br>`);
        }) 
    });

}
function initSite() {
    if(localStorage) {
        //console.log("Local Storage Working");
        let students = localStorage.getItem("Student");
        if (students) {
            console.log("There are students");
            let students = JSON.parse(localStorage.getItem("Student"));
            console.log(students);
        } else {
            localStorage.setItem("Student", "[]");
            alert("No Students Added");
        }
    } else {
        console.log("No local storage")
    }
}
$(document).ready(function () {
    initListners();
    initSite();
})