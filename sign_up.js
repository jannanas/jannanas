function toggleSignup(){
     document.getElementById("signin-toggle").style.backgroundColor="#fff";
     document.getElementById("signin-toggle").style.color="#5B595F";

     document.getElementById("signup-toggle").style.backgroundColor="#588157";
     document.getElementById("signup-toggle").style.color="#fff";

     document.getElementById("signin-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleSignIn(){
     document.getElementById("signin-toggle").style.backgroundColor="#588157";
     document.getElementById("signin-toggle").style.color="#fff";

     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#5B595F";

     document.getElementById("signin-form").style.display="block";
     document.getElementById("signup-form").style.display="none";
 }
 