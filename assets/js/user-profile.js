$(document).ready(function() {  

    if (typeof(Storage) !== "undefined") {
        console.log(" Browser supports Web Storage ..");
      } else {
        console.log(" Sorry! No Web Storage support..");
      }
    
    //var userdata = JSON.parse(getCookie("user-data"));
    var  userdata = sessionStorage.getItem('user-data');
    userdata = JSON.parse(userdata);



    $('#fname').text(userdata.firstName);
    $('#middleName').text(userdata.middleName);
    $('#lname').text(userdata.lastName);
    $('#dob').text(userdata.dob);
    $('#age').text(userdata.age);
    $('#iddentification').text(userdata.panNo);
    $('#state').text(userdata.addState);
    $('#country').text(userdata.addCountry);
    $('#district').text(userdata.addDistrict);
    $('#phone').text(userdata.userPhone);
    $('#Username').text(userdata.userName);
    $('#bloodgroup').text(userdata.bloodGroup);
    $('#timezone').text(userdata.firstName);
    $('#email').text(userdata.userEmail);
    $('#address').text(userdata.userAddress);
    $('#pin').text(userdata.addPin);
    $('#userGroup').text(userdata.userGroup);
    $('#sex').text(userdata.sex);



});


















