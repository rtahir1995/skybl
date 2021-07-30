$(document).ready(function () {
    

    $(".signUpGetLink").on("click", function () {

       let name = $("#signUpName").val().trim();
       let password = $("#signUpPassword").val().trim();
       let email = $("#signUpEmail").val().trim();

       console.log(name,password,email)


       var db = firebase.database();
       var newBranch = db.ref("users").push();
       newBranch.set({
           name,
           password,
           email
       }).then(function () {
           console.log("done")

           $('.signUpForm').toggle('slow', function () { 
               $('.logInForm').toggle('slow') 
            });
       })
    })
})