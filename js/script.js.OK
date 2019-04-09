'use strict';

let countNext = 0;

function previous() {
	let list = document.getElementsByTagName('li');

	if(countNext == 0) {
		list[countNext].classList.toggle('hide');
		list[list.length - 1].classList.toggle('hide');	
		countNext = list.length - 1;
	} else {	
		list[countNext].classList.toggle('hide');	
		list[countNext - 1].classList.toggle('hide');	
		countNext--;
	}
}

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
}
