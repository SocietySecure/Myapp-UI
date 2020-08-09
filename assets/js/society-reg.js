$(document).ready(function() {
  console.log("ready");

  if (typeof(Storage) !== "undefined") {
    console.log(" Browser supports Web Storage ..");
  } else {
    console.log(" Sorry! No Web Storage support..");
  }



  $.post(
    'http://localhost:8080/country/',  // url
  { myData: 'This is my data.' }, // data to be submit
  function(data, status, xhr) {   // success callback function
           //alert('status: ' + status + ', data: ' + data.responseData);
           console.log("staus: " + data.staus);
           console.log("code: " + data.code);
           console.log("message: " + data.message);
           console.log("countryId: " + data.data[0].countryId);
           console.log("countryName: " + data.data[0].countryName);

          let dropdown = $('#countrySel');
          dropdown.empty();
          dropdown.append('<option selected="true" disabled>Choose Country</option>');
          dropdown.prop('selectedIndex', 0);

           $.each(data.data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.countryId).text(entry.countryName));
          })

       },

  'json'); // response data format


/* for block dropdown population $.ajax call */
$("#societySel").change(function(){
  var myObject = new Object();
  myObject.id = this.value;//setting ID value
  var reqst = JSON.stringify(myObject);

  $.ajax({
    url: "http://localhost:8080/block/sid",
    method: "POST",
    data: reqst,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
     success: function(result,status,jqXHR ){
      console.log("backend call success. populating City dropdown... ");
      let dropdownBlock= $('#blockSel');
      dropdownBlock.empty();
      dropdownBlock.append('<option selected="true" disabled>Choose City </option>');
      dropdownBlock.prop('selectedIndex', 0);

       $.each(result.data, function (key, entry) {
        console.log("response"+ result.data.cityName);
        dropdownBlock.append($('<option></option>').attr('value', entry.did).text(entry.districtName));
      })
     },
     error(jqXHR, textStatus, errorThrown){
      console.log("called Failed , network issue");
     }
  }) 
});

/* for District selecrion $.post call*/
/*  $("#stateSel").change(function(){
    var distId = new Object();
    distId.id = this.value;//setting ID value
    var reqst = JSON.stringify(distId);

 
    console.log("populating state dropdown... stateId: "+ reqst);
    $.post('http://localhost:8080/district/sid',
    reqst,
   // headers     : { 'Content-Type': 'application/json' },
    //{myData: JSON.stringify('{"id":"2"}') },
    //{ myData: JSON.stringify(reqst)},
    //contentType: 'application/json',
    function(data, status, xhr) {
      console.log("backend call success. populating district dropdown... ");
            let dropdownDistrict = $('#districtSel');
            dropdownDistrict.empty();
            dropdownDistrict.append('<option selected="true" disabled>Choose District</option>');
            dropdownDistrict.prop('selectedIndex', 0);
  
             $.each(data.data, function (key, entry) {
              dropdownState.append($('<option></option>').attr('value', entry.districtId).text(entry.districtName));
            })
  
         },
  
    'json'); 

  });
*/


});

