function main() {
	document.querySelector('aboutfile').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';
	});
}

document.addEventListener('DOMContentLoaded', main)