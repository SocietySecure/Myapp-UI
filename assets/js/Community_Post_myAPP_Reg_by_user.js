$(document).ready(function() {  

    //var userdata = getCookie("user-data");
    var userdata = JSON.parse(getCookie("user-data"));
    if(userdata==""){
        alert("Login please");
        $(location).attr('href', 'Welcome.htm');
    }
    console.log("cookie data: "+ userdata);
    console.log("cookie firstname: "+ userdata.firstName);
    $('#accountName').text(userdata.firstName+" "+ userdata.firstName);





    $("#myAccount").click(function(){

        $(location).attr('href', 'Post_Myap_registration_by_use_Navigation_Page.htm');
    })  

    $("#editAccount").click(function(){
        alert("page is not ready");

    })  

    $("#logoutApp").click(function(){
        setCookie('user-data', "", 0);
        $(location).attr('href', 'Welcome.htm');
    })  
});


