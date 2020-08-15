$(document).ready(function() { 
	 $.ajax({
		url: "http://localhost:8080/society/getallenroll",
		method: "POST",
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		 success: function(result,status,jqXHR ){
		
		  if(result.status){
			  //setCookie('user-data', JSON.stringify(enrollmentObject), 1);
			  populateEnrollmentDetails(result.data);
			  //if(result.data.message)
			  //$(location).attr('href', '../User_Registration_to_Society/Post_Society_Registration_By_User.htm');
		  }else{
			  alert("error while saving record login: "+ result.data.message);
		  }
	 
		 },
		 error(jqXHR, textStatus, errorThrown){
		  console.log("Login Failed , network issue");
		 }
	  }); 

   });

function  populateEnrollmentDetails(data){
	$('#enrollmentTable').DataTable({
		data: data,
		jQueryUI: true,
		 columns: [
            { data: 'firstName' },
            { data: 'lastName' },
            { data: 'phone' },
            { data: 'email' },
		    { 'defaultContent': "Action" ,
				render : function(data,type,row){
				  return '<a href="#?enrollId="'+row.id+'>Action</a>';
				}
			
			}
            
        ]
	
	});

}
