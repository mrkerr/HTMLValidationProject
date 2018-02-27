function validateformTwo(){
	
	var x = document.forms["myformTwo"]
["Address"].value;

	if (x="" || x.indexOf(',') <= -1){
		alert("City,State not in correct format");
	}
	var a = document.getElementById("address");
	var aVal = a.value;
	localStorage.setItem("Address", aVal);
  
}



