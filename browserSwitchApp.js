
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
				break;
			default:
				alert ("Wrong password");
		}
		break;
	case null :
		break;
	default:
		alert("I don't know you");
}

