$(document).ready(function () {
    var db = firebase.database();

    var user = null;

    db.ref("users").on("value", function (snapshot) {
        user = snapshot.val();
       });

    $(".logInGetLink").on("click", function () {
        var name = $("#logInName").val().trim();
        var password = $("#logInPassword").val().trim();

        for (let i in user){
            var users = user[i]
            
            if(users.name === name && users.password === password){

            window.localStorage.setItem("keyword" , i)

            window.location.href = "blog.html";
             $('.signUpForm').css({
                 display: 'none'
             });

             $('.logInForm').css({
                display: 'none'
            });
             
                return
            }
            
        }
        
        alert("incorrect email and password, please again enter email and password")

    })
      
})