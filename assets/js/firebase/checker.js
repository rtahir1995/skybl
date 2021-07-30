$(document).ready(function () {
    var keyword = window.localStorage.getItem("keyword");
 
    if(!keyword){
        $('.pupupSection').toggle('slow'); 
       // window.location.href = "login.html";
       $(".post").css({
           display: "none"
       });
       $(".logout").css({
        display: "none"
    })
        return
    };

   
    var db = firebase.database();
 
    db.ref("users/" + keyword).once("value", function (snapshot) {
         var info = snapshot.val();
 
         if(!info){
            $('.pupupSection').toggle('slow'); 
             //window.location.href = "login.html";
             return;
         }
 
         window.userInfo = info
    })

    
    $(".post").css({
        display: "block"
    });

    $(".logout").css({
        display: "block"
    })
 

    $('.signUpForm').css({
        display: 'none'
    });

    $('.logInForm').css({
       display: 'none'
   });

   $(".logout").on("click", function () {
    window.localStorage.removeItem("keyword");
    $(".logout").css({
        display: "none",
    })
    $('.logInForm').css({
        display: 'block'
    });
    $(".post").css({
        display: "none"
    });
})

 })