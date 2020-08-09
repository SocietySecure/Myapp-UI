$(document).ready(function() {  
  //alert('onready');

  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }

    $("#enrollmentSave").click(function(e){
        e.preventDefault();
        //setting enrollment object
        var regd = new Object();
        regd.phone = $('#mobile').val();
        regd.email = $('#email').val();
        var reqst = JSON.stringify(regd);

        alert('onclick');
          $.ajax({
            url: "http://localhost:8080/otp/create",
            method: "POST",
            data: reqst,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(result,status,jqXHR ){
            console.log(" call succesful .. ");
              if(result.status){
               
                  //setCookie('otp-phone', reqst, 1);
                  sessionStorage.setItem('otp-phone', reqst);
                  alert("Enrollment request submit status: "+result.message);
                  $(location).attr('href', '../User_Reg_Login_Welcome/Verify_OTP.htm');
              }else{
                  alert("error while saving record login: "+ result.message);
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

/*
function submitPhone() {


var regd = new Object();
regd.phone = $('#mobile').val();
regd.email = $('#email').val();
var reqst = JSON.stringify(regd);
$.ajax({
  url: "http://localhost:8080/otp/create",
  method: "POST",
  data: reqst,
  dataType: 'json',
  contentType: "application/json; charset=utf-8",
  success: function(result,status,jqXHR ){
  console.log(" call succesful .. ");
    if(result.status){
     
        setCookie('user-data', JSON.stringify(regd), 1);
        alert("Enrollment request submit status: "+result.message);
        $(location).attr('href', '../User_Registration_to_Society/Verify_OTP.htm');
    }else{
        alert("error while saving record login: "+ result.data.message);
    }



   },
   error(jqXHR, textStatus, errorThrown){
    console.log("Login Failed , network issue");
   }
});
} */