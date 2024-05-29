function logmf(){

    alert("Login Successfull");
     var u_name = document.getElementById("name").value;
     var u_pass = document.getElementById("pass").value;
     var mess = document.getElementById("mess");
     var pn = "abc";
     var pp = "123";
 
     if(u_name===pn && u_pass===pp)
     {
        //  alert("Login Successfull");
         mess.textContent = "login  successful";
         return false;
     }
     else
     {
        //  alert("invalid username or password");
        mess.textContent = "login  unsuccessful";
        return false;
     }

   
 }