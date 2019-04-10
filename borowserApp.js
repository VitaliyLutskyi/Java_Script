
let login, password;

login = prompt ("Who's there?", '');
if(login == "Admin"){
	password = prompt ("Password?",'');
	if (password=="TheMaster")
		alert("Welcome!");
	
	else if(password != null)
		alert ("Wrong password");
	else
		alert("Canceled");
}
else if(login != null)
	alert("I don't know you");
else
	alert("Canceled");
