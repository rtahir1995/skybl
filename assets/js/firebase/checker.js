$(document).ready(function () {
    var keyword = window.localStorage.getItem("keyword");
 
    if(!keyword){
        $('.pupupSection').toggle('slow'); 
       // window.location.href = "login.html";
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

    $('.signUpForm').css({
        display: 'none'
    });

    $('.logInForm').css({
       display: 'none'
   });
 })