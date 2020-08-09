$(document).ready(function() {  

  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }


  //var userdata = JSON.parse(getCookie("user-data"));
  var  userdata = sessionStorage.getItem('user-data');
  var userdataJson = JSON.parse(userdata);
  //var userDataReqst = JSON.stringify(userdata);

  //alert('before dd cookie')
  var dropdowns;
  var ddCookie = sessionStorage.getItem("user-dropdown");
  //alert('after dd cookie')
  if(ddCookie==null || ddCookie==""){
    alert('is null dd cookie');
    dropdowns = getDropDowns (userdata);
  }else{
    //alert('is NOT null dd cookie');
    dropdowns = JSON.parse(ddCookie);
  }
  alert(ddCookie);
  userdata = userdataJson;
  let countryDropdown = $('#countrySel');
  countryDropdown.empty();
  countryDropdown.append('<option selected="true" disabled>Choose Country</option>');
  countryDropdown.prop('selectedIndex', userdata.addCountry);
   $.each(dropdowns.countryList, function (key, entry) {
    countryDropdown.append($('<option></option>').attr('value', entry.countryId).text(entry.countryName));
  })

  let stateDropdown = $('#stateSel');
  stateDropdown.empty();
  stateDropdown.append('<option selected="true" disabled>Choose State</option>');
  stateDropdown.prop('selectedIndex', userdata.addState);
   $.each(dropdowns.stateList, function (key, entry) {
    stateDropdown.append($('<option></option>').attr('value', entry.stateId).text(entry.stateName));
  })

  let districtDropdown = $('#districtSel');
  districtDropdown.empty();
  districtDropdown.append('<option selected="true" disabled>Choose District</option>');
  districtDropdown.prop('selectedIndex', userdata.addDistrict);
   $.each(dropdowns.districtList, function (key, entry) {
     //alert("id: "+ entry.id + ", value: " + entry.districtName);
    districtDropdown.append($('<option></option>').attr('value', entry.id).text(entry.districtName));
  })

  let cityDropdown = $('#citySel');
  cityDropdown.empty();
  cityDropdown.append('<option selected="true" disabled>Choose City</option>');
  cityDropdown.prop('selectedIndex', userdata.addCity);
   $.each(dropdowns.cityList, function (key, entry) {
    cityDropdown.append($('<option></option>').attr('value', entry.cid).text(entry.cityName));
  })

  //set editable profile fields
 

    $('#fname').val(userdata.firstName);
    $('#middleName').val(userdata.middleName);
    $('#lname').val(userdata.lastName);
    $('#dob').val(userdata.dob);
    $('#age').val(userdata.age);
    $('#iddentification').val(userdata.panNo);
   // $('#stateSel').val(userdata.addState);
    //$('#countrySel').val(userdata.addCountry);
   // $('#district').val(userdata.addDistrict);
    $('#phone').val(userdata.userPhone);
    $('#Username').val(userdata.userName);
    $('#bloodgroup').val(userdata.bloodGroup);
    $('#timezone').val(userdata.firstName);
    $('#email').val(userdata.userEmail);
    $('#address').val(userdata.userAddress);
    $('#pin').val(userdata.addPin);
    $('#userGroup').val(userdata.userGroup);
    $('#sex').val(userdata.sex);
    $('#userId').val(userdata.userId);






    /* for state selection $.ajax call */
  $("#saveUser").click(function(){

//setting user object
  var userProfile = new Object();
  userProfile.userId =  $('#userId').val();
  userProfile.password = "password";
  userProfile.aadharNo;
  userProfile.firstName = $('#fname').val();
  userProfile.middleName = $('#middleName').val();
  userProfile.lastName = $('#lname').val();
  userProfile.addCountry = $('#countrySel').val();
  userProfile.addDistrict = $('#district').val();
  userProfile.addPin = $('#pin').val();
  userProfile.addState = $('#stateSel').val();
  userProfile.age = $('#age').val();
  userProfile.alternativePhone;
  userProfile.bloodGroup = $('#bloodgroup').val();
  userProfile.comment;
  userProfile.createdBy;
  userProfile.dob = $('#dob').val();
  userProfile.idType;
  userProfile.isDeleted = false;
  userProfile.isEnabled =true;
  userProfile.memberSince;
  userProfile.panNo;
  userProfile.parentId;
  userProfile.phoneImei;
  userProfile.photoPath;
  userProfile.referedBy;
  userProfile.sex = $('#gender').val();
  userProfile.ssn;
  userProfile.userAddress = $('#address').val();
  userProfile.userDl;
  userProfile.userEmail = $('#email').val();
  userProfile.userGroup = $('#userGroup').val();
  userProfile.userName = $('#Username').val();
  userProfile.userPhone = $('#phone').val();
  userProfile.timezone = $('#timezone').val();


  var reqst = JSON.stringify(userProfile);

  $.ajax({
    url: "http://localhost:8080/user/create",
    method: "POST",
    data: reqst,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
     success: function(result,status,jqXHR ){
      console.log("save profile call succesful .. ");
      if(result.status){
       
          //setCookie('user-dropdown', ddCookie, 1);
          //setCookie('user-data', JSON.stringify(userProfile), 1);
          sessionStorage.setItem('user-dropdown', ddCookie);
          sessionStorage.setItem('user-data', JSON.stringify(userProfile));

          alert("userRedord update: "+result.message);
          if ($('#purpose').val()=='society'){
            alert('forwarding to Society Enrolment page');
            $(location).attr('href', '../User_Reg_Login_Welcome/Society_Reg_Page1.htm');
          }else{
            $(location).attr('href', '../User_Registration_to_App/PostMyapp_registration_byUser.htm');
            alert('forwarding to Profile page page');

          }
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

function getDropDowns (userdata){
    //get dropdowndata from server.
    var dropdownList;
    $.ajax({
      url: "http://localhost:8080/user/dropdowns",
      method: "POST",
      data: userdata,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function(result,status,jqXHR ){
        console.log("dropdown call succesful .. "+result);
        if(result.status){
          
          //setCookie('user-dropdown', JSON.stringify(result.data), 1);
          dropdownList = result.data;
          sessionStorage.setItem('user-dropdown', JSON.stringify(result.data));

          alert("dropdown data: "+JSON.stringify(result));
        }else{
          alert("error while fetcing dropdown  "+ result.message);
        }
        
        
        
      },
      error(jqXHR, textStatus, errorThrown){
        console.log("Login Failed , network issue");
      }
    }) 
    return dropdownList;
}

