'use strict';

function darkMode() {
	document.getElementsByTagName('link')[0].href = 'css/darkmode.css';
	document.getElementsByTagName('button')[1].setAttribute('onclick', `whiteMode()`);
	document.getElementsByTagName('button')[1].innerHTML = 'White mode';

}

function whiteMode() {
	document.getElementsByTagName('link')[0].href = 'css/style.css';
	document.getElementsByTagName('button')[1].setAttribute('onclick', `darkMode()`);
	document.getElementsByTagName('button')[1].innerHTML = 'Dark mode';
}

let countNext = 0;

function previous() {
	let list = document.getElementsByTagName('li');

	if(countNext == 0) {
		list[countNext].classList.toggle('look');
		list[list.length - 1].classList.toggle('look');	
		countNext = list.length - 1;
	} else {	
		list[countNext].classList.toggle('look');	
		list[countNext - 1].classList.toggle('look');	
		countNext--;
	}
}

function next() {
	let list = document.getElementsByTagName('li');

	if(countNext == list.length - 1) {
		list[countNext].classList.toggle('look');
		list[0].classList.toggle('look');	
		countNext = 0;
	} else {	
		list[countNext].classList.toggle('look');	
		list[countNext + 1].classList.toggle('look');	
		countNext++;
	}
}
