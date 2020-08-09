$(document).ready(function() {  

  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }

  $("#enrollmentSave").click(function(){

//setting enrollment object

  var enrollmentObject = new Object();

  enrollmentObject.id;
  enrollmentObject.firstName = $('#firstname').val();
  //enrollmentObject.middleName = $('#middleName').val();
  enrollmentObject.lastName = $('#lastname').val();
  enrollmentObject.phone = $('#mobileno').val();
  enrollmentObject.userId =  $('#userId').val();
  enrollmentObject.email = $('#email').val();
  enrollmentObject.isManagementSocietyManagementTeam = $('#isSocietyManagementTeam').val();
  enrollmentObject.isDocAttached = $('#isDocAttached').val();
  enrollmentObject.societyName = $('#societyName').val();
  enrollmentObject.societyAddress = $('#societyAddress').val();
  enrollmentObject.societyId = $('#societyId').val();
  enrollmentObject.state = $('#state').val();
  enrollmentObject.country = $('#country').val();
  enrollmentObject.district = $('#district').val();
  enrollmentObject.city = $('#district').val();
  enrollmentObject.resuestTime;



  var reqst = JSON.stringify(enrollmentObject);

  $.ajax({
    url: "http://localhost:8080/societyenrollment/enroll",
    method: "POST",
    data: reqst,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
     success: function(result,status,jqXHR ){
      console.log("login call succesful .. ");
      if(result.status){
       
          //setCookie('user-data', JSON.stringify(enrollmentObject), 1);
          sessionStorage.setItem('user-data', JSON.stringify(enrollmentObject));
          alert("Enrollment request submit status: "+result.message);
          //if(result.data.message)
          //$(location).attr('href', '../User_Registration_to_Society/Post_Society_Registration_By_User.htm');
      }else{
          alert("error while saving enrolment data : "+ result.message);
      }
 


     },
     error(jqXHR, textStatus, errorThrown){
      console.log("Login Failed , network issue");
     }
}) 
  });



});
