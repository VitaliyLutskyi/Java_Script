function fillOut(){
	var elements = document.querySelectorAll('ul:first-child li');
	fill(elements, 'This is first ul');
	var elements = document.querySelectorAll('ul.second li');
	fill(elements, 'This is second ul');
	var elements = document.querySelectorAll('ul.last li');
	fill(elements, 'This is third ul');
	
	elements = document.getElementsByTagName('li');
	var element = document.querySelector('p');
	element.innerHTML = 'There are ' + elements.length + ' li elements';
	
	function fill(elements, text){
		for (var i = 0; i < elements.length; i++) {
			currentElement = elements[i];
			currentElement.innerHTML = text;
		}
	}
}

function highlightExternalLinks(){
	elements = document.querySelectorAll('li>a');
	for (var i = 0; i < elements.length; i++) {
		currentAtribute = elements[i].href;
		if(((currentAtribute.search('http://') != -1) || (currentAtribute.search('ftp://') != -1)) && (currentAtribute.search('http://internal.com') == -1))
			elements[i].classList.add('external-red') ;
	}
}