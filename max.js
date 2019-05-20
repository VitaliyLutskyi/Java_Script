collapseMenu.onclick = collapse;

function collapse(){
	var height = document.querySelector('ul').style.height;
	height == '20px' ? document.querySelector('ul').style.height = 'auto' : document.querySelector('ul').style.height = '20px';
}
