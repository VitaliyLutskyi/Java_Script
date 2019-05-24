sendByGet.onclick = () => validate(ageGet) ?  sendByGetMethod() : ''; 

sendByPost.onclick = () => validate(agePost) ? sendByPostMethod() : '';

function validate(element){
	if(element.value>0 && element.value<101){
		element.classList.remove('error');
        return true;
    }
    else{
    	element.value = 'Error. Age must be between 1 and 100.';
    	element.classList.add('error');
    	element.focus();
    	return false;
    }
}

function sendByGetMethod() {
	var user = {
		userName:document.getElementById('nameGet').value,	
        userSurname: document.getElementById('surnameGet').value,
	    userAge: document.getElementById('ageGet').value,
        userAddress: document.getElementById('addressGet').value
	};
	for(var data in user)
        user[data] += '.ValidatedByGET';
    
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userName="+user.userName+"&userSurname="+user.userSurname+"&userAge="+user.userAge+"&userAddress="+user.userAddress);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send();
}

function sendByPostMethod() {
	var user = {
        userName:document.getElementById('namePost').value,	
        userSurname: document.getElementById('surnamePost').value,
	    userAge: document.getElementById('agePost').value,
        userAddress: document.getElementById('addressPost').value	
		};
    for(var data in user)
        user[data] += '.ValidatedByPOST';
		
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/userPost");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify(user));
}


















