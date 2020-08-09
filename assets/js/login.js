$(document).ready(function() {  
  
  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }


/* for state selection $.ajax call */
  $("#submit").click(function(){
    //alert("submitting...");
  var checkboxUserName = $("#rememberUserName").val();
  //alert(checkboxUserName);
  console.log(checkboxUserName);


//setting reqiest object
  var login = new Object();
  login.userName = $('#uname').val();
  login.password = $('#psw').val();
  
  //validation:
  //if($.trim(str).)


  var reqst = JSON.stringify(login);

  $.ajax({
    url: "http://localhost:8080/user/login",
    method: "POST",
    data: reqst,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
     success: function(result,status,jqXHR ){
      console.log("login call succesful .. ");
      if(result.status){
          alert("login Succeful, welcome "+result.data.userName);

          //$.cookie("user-data", JSON.stringify(result.data));
          //$.cookie("user-data", JSON.stringify(result.data), {expires: new Date(2013, 10, 29, 11, 00, 00), secure: true});
          //setCookie('user-data', JSON.stringify(result.data), 1);
          sessionStorage.setItem('user-data', JSON.stringify(result.data));

          $(location).attr('href', '../User_Registration_to_Society/Post_Society_Registration_By_User.htm');
      }else{
          alert("Invalid login");
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
