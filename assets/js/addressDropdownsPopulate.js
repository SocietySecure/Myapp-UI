$(document).ready(function() {
    console.log("ready");
  
/* for state selection $.ajax call */
$("#countrySel").change(function(){
    //reqst = '{"id": "' + this.value + '"}' ;
  
  //setting reqiest object
    var myObject = new Object();
    myObject.id = this.value;//setting ID value
    var reqst = JSON.stringify(myObject);
  
    $.ajax({
      url: "http://localhost:8080/state/cid",
      method: "POST",
      data: reqst,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
       success: function(result,status,jqXHR ){
        console.log("backend call success. populating state dropdown... ");
        let dropdownState = $('#stateSel');
        dropdownState.empty();
        dropdownState.append('<option selected="true" disabled>Choose State</option>');
        dropdownState.prop('selectedIndex', 0);
  
         $.each(result.data, function (key, entry) {
          console.log("response"+ result.data.stateId);
          dropdownState.append($('<option></option>').attr('value', entry.stateId).text(entry.stateName));
        })
       },
       error(jqXHR, textStatus, errorThrown){
        console.log("called Failed , network issue");
       }
  }) 
    });
  
  
  
  /*    */
    
  /* for district dropdown population $.ajax call */
  $("#stateSel").change(function(){
    var myObject = new Object();
    myObject.id = this.value;//setting ID value
    var reqst = JSON.stringify(myObject);
  
    $.ajax({
      url: "http://localhost:8080/district/sid",
      method: "POST",
      data: reqst,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
       success: function(result,status,jqXHR ){
        console.log("backend call success. populating District dropdown... ");
        let dropdownDistrict = $('#districtSel');
        dropdownDistrict.empty();
        dropdownDistrict.append('<option selected="true" disabled>Choose District </option>');
        dropdownDistrict.prop('selectedIndex', 0);
  
         $.each(result.data, function (key, entry) {
          console.log("response"+ result.data.districtName);
          dropdownDistrict.append($('<option></option>').attr('value', entry.id).text(entry.districtName));
        })
       },
       error(jqXHR, textStatus, errorThrown){
        console.log("called Failed , network issue");
       }
    }) 
  });
  
  /* for City dropdown population $.ajax call */
  $("#districtSel").change(function(){
    var myObject = new Object();
    myObject.id = this.value;//setting ID value
    var reqst = JSON.stringify(myObject);
  
    $.ajax({
      url: "http://localhost:8080/city/did",
      method: "POST",
      data: reqst,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
       success: function(result,status,jqXHR ){
        console.log("backend call success. populating City dropdown... ");
        let dropdownCity= $('#citySel');
        dropdownCity.empty();
        dropdownCity.append('<option selected="true" disabled>Choose City </option>');
        dropdownCity.prop('selectedIndex', 0);
  
         $.each(result.data, function (key, entry) {
          console.log("response"+ result.data.cityName);
          dropdownCity.append($('<option></option>').attr('value', entry.cid).text(entry.cityName));
        })
       },
       error(jqXHR, textStatus, errorThrown){
        console.log("called Failed , network issue");
       }
    }) 
  });
  
  
  /* for Society dropdown population $.ajax call */
  $("#citySel").change(function(){
    var myObject = new Object();
    myObject.id = this.value;//setting ID value
    var reqst = JSON.stringify(myObject);
  
    $.ajax({
      url: "http://localhost:8080/society/cid",
      method: "POST",
      data: reqst,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
       success: function(result,status,jqXHR ){
        console.log("backend call success. populating City dropdown... ");
        let dropdownSociety= $('#societySel');
        dropdownSociety.empty();
        dropdownSociety.append('<option selected="true" disabled>Choose City </option>');
        dropdownSociety.prop('selectedIndex', 0);
  
         $.each(result.data, function (key, entry) {
          console.log("response"+ result.data.societyId);
          dropdownSociety.append($('<option></option>').attr('value', entry.societyId).text(entry.societyName));
        })
       },
       error(jqXHR, textStatus, errorThrown){
        console.log("called Failed , network issue");
       }
    }) 
  });

});