$(document).ready(function() {  

  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }

    //alert('onready');
      $("#otpVerify").click(function(e){
          e.preventDefault();

        var  otpStr = sessionStorage.getItem('otp-phone');
        /* var otpStr = getCookie('otp-phone');
        if(otpStr==null || otpStr ==''){
            alert("internal error, no cookie found for otp phone");
            history.back();
        }
        */
          var otpJson = JSON.parse(otpStr);
          var keyValue = new Object();
          keyValue.key=otpJson.phone;
          keyValue.value= $('#otpValue').val();
   
          var reqst = JSON.stringify(keyValue);
  
          alert('onclick');
            $.ajax({
              url: "http://localhost:8080/otp/verify",
              method: "POST",
              data: reqst,
              dataType: 'json',
              contentType: "application/json; charset=utf-8",
              success: function(result,status,jqXHR ){
              console.log(" call succesful .. ");
                if(result.status){
                 
                    //setCookie('user-data', JSON.stringify(result.data), 1);
                    sessionStorage.setItem('user-data', JSON.stringify(result.data));
                    alert("OTP verifying submit status: "+result.message);
                    $(location).attr('href', '../User_Reg_Login_Welcome/profile_page.htm');
                }else{
                    alert("error while verifying OTP: "+ result.message);
                }
           
          
          
               },
               error(jqXHR, textStatus, errorThrown){
                console.log("Login Failed , network issue");
               }
          }) 
      });
      
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