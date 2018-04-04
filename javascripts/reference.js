function main() {

	document.querySelector('.about_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';

		document.querySelector('.next').style.display = 'none';
		document.querySelector('.about').style.display = 'block';

		$(".about_command1").typed({
			strings: ["cat About.txt"],
			showCursor: false,
			typeSpeed: 10,
			loop: false,
			callback: function() {
				document.querySelector('.about_output1').style.display = 'block';
				document.querySelector('.section_footer').style.display = 'block';
			}
		});
	});

	document.querySelector('.projects_link').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.experience').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';

		document.querySelector('.next').style.display = 'none';
		document.querySelector('.projects').style.display = 'block';
	});

	document.querySelector('.experience_link').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.about').style.display = 'none';
		document.querySelector('.projects').style.display = 'none';
		document.querySelector('.contact').style.display = 'none';

		document.querySelector('.next').style.display = 'none';
		document.querySelector('.experience').style.display = 'block';
	});

	document.querySelector('.contact_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.clear_command').innerHTML = '';

		$(".clear_command").typed({
			strings: ["clear"],
			showCursor: false,
			typeSpeed: 10,
			loop: false,
			callback: function() {

				document.querySelector('.about').style.display = 'none';
				document.querySelector('.projects').style.display = 'none';
				document.querySelector('.experience').style.display = 'none';

				document.querySelector('.next').style.display = 'none';
				document.querySelector('.contact').style.display = 'block';

				$(".contact_command1").typed({
					strings: ["cd Contact"],
					showCursor: false,
					typeSpeed: 10,
					loop: false,
					callback: function() {
						document.querySelector('.contact_line2').style.display = 'block';

						$(".contact_command2").typed({
							strings: ["ls"],
							showCursor: false,
							typeSpeed: 100,
							loop: false,
							callback: function() {
								document.querySelector('.contact_output1').style.display = 'block';
								document.querySelector('.contact_line3').style.display = 'block';
							}
						});

					}
				});

			}
		});
	});

}

document.addEventListener('DOMContentLoaded', main)