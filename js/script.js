'use strict';

function previous() {
	console.log('Pas encore fait');
}

let countNext = 0;
function next() {
	let list = document.getElementsByTagName('li');

	if(countNext == list.length - 1) {
		list[countNext].classList.toggle('hide');
		list[0].classList.toggle('hide');	
		countNext = 0;
	} else {	
		list[countNext].classList.toggle('hide');	
		list[countNext + 1].classList.toggle('hide');	
		countNext++;
	}

	//	console.log(countNext);
}
