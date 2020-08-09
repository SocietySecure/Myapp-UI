$(document).ready(function() {  

    //var userdata = getCookie("user-data");
    //var cookieUser= getCookie("user-data");
    var  cookieUser = sessionStorage.getItem('user-data');

    console.log("User-data: " + cookieUser);
    
    if(cookieUser==""){
        alert("Login please");
        $(location).attr('href', '../User_Reg_Login_Welcome/User_Login.htm');
    }
    var userdata = JSON.parse(cookieUser);
    console.log("cookie firstname: "+ userdata.firstName);
    $('#accountName').text(userdata.firstName+" "+ userdata.firstName);

    $("#myAccount").click(function(){

      $(location).attr('href', '../User_Registration_to_App/PostMyapp_registration_byUser.htm');
    })  

    $("#editAccount").click(function(){
      alert('edit account');
      $(location).attr('href', '../User_Reg_Login_Welcome/profile_page.htm');

    })  

    $("#logoutApp").click(function(){
        setCookie('user-data', "", 0);
        sessionStorage.clear();
        $(location).attr('href', '../User_Reg_Login_Welcome/Welcome.htm');
        
        alert("you have succesfully logeed out");
    })  

    $("#homeLink").click(function(){
      $(location).attr('href', '../User_Registration_to_Society/Post_Society_Registration_By_User.htm');
    })

    
});







function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 
  
  
