function main() {
	document.querySelector('.aboutlink').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';
		document.querySelector('.about').style.display = 'block';
	});

	document.querySelector('.projectslink').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';
		document.querySelector('.projects').style.display = 'block';
	});

	document.querySelector('.experiencelink').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';
		document.querySelector('.experience').style.display = 'block';
	});

	document.querySelector('.contactlink').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'block';
	});
}

document.addEventListener('DOMContentLoaded', main)