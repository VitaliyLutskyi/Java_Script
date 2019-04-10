
let login, password;

login = prompt ("Who's there?", '');
switch (login) {
	case "Admin":
		password = prompt ("Password?",'');
		switch (password) {
			case "TheMaster":
				alert("Welcome!");
				break;
			case null: 
				alert ("Canceled");
				break;
			default:
				alert ("Wrong password");
		}
		break;
	case null :
		alert ("Canceled");
		break;
	default:
		alert("I don't know you");
}

