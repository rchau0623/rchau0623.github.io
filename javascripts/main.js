function about() {
	const content = document.querySelector('.content')

	const line1 = document.createElement('div');
	line1.setAttribute('class', 'line1');
	line1.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="command1"></span>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<span>
	<pre>
Hi. My name is

██████╗ ██╗   ██╗ █████╗ ███╗  ██╗
██╔══██╗╚██╗ ██╔╝██╔══██╗████╗ ██║
██████╔╝ ╚████╔╝ ███████║██╔██╗██║
██╔══██╗  ╚██╔╝  ██╔══██║██║╚████║
██║  ██║   ██║   ██║  ██║██║ ╚███║
╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝
                                   

I am currently a senior at NYU studying Math and Computer Science. 

I enjoy solving problems, mulling over movies, reading outloud, and aspiring to be healthy. 
	</pre>
</span>
`;

	const footer = document.createElement('div');
	footer.setAttribute('class', 'footer');
	footer.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="clear"></span>
`;

	content.appendChild(line1);

	$(".command1").typed({
		strings: ["cat About.txt"],
		showCursor: false,
		typeSpeed: 10,	
		loop: false,
		callback: function() {
			line1.appendChild(output1);
			content.appendChild(footer);
		}
	});
}

function projects() {

}

function experience() {

}

function contact() {
	const line1 = document.createElement('div');
	line1.setAttribute('class', 'line1');
	line1.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="command1"></span>
`;

	const line2 = document.createElement('div');
	line2.setAttribute('class', 'line2');
	line2.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Contact</span><span class="symbol">$</span>
<span class="command2"></span>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<a href="https://github.com/rchau0623" class="file">Github</a>
<a href="https://linkedin.com/in/rchau0623" class="file">LinkedIn</a>
<a href="Ryan Chau - Résumé .pdf" class="file">Resume</a>
<a href="mailto:rchau@nyu.edu" class="file">Email</a>
`;

	const line3 = document.createElement('div');
	line3.setAttribute('class', 'line2');
	line3.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Contact</span><span class="symbol">$</span>
<span class="out"></span>
`;

	const footer = document.createElement('div');
	footer.setAttribute('class', 'footer');
	footer.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="clear"></span>
`;
	content.appendChild(line1);

	$(".command1").typed({
		strings: ["cd Contact"],
		showCursor: false,
		typeSpeed: 10,	
		loop: false,
		callback: function() {
			content.appendChild(line2);
			$(".command2").typed({
				strings: ["ls"],
				showCursor: false,
				typeSpeed: 100,	
				loop: false,
				callback: function() {
					line2.appendChild(output1);
					content.appendChild(line3);
					footer.style.display = 'none';
					content.appendChild(footer);
				}
			});
		}
	});
}

function clear(callback) {
	$(".clear").typed({
		strings: ["clear"],
		showCursor: false,
		typeSpeed: 100,
		loop: false,
		callback: function() {
			content.innerHTML = ''; 
			callback();
		}
	});
}

function main() {

	document.querySelector('.about_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.next').style.display = 'none';
		content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$(".out").typed({
					strings: ["cd .."],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						document.querySelector('.footer').style.display = 'block';
						clear(about);
					}
				});
			} else {
				clear(about);
			}
		} else {
			about();
		}
	});

	document.querySelector('.projects_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.next').style.display = 'none';
		content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$(".out").typed({
					strings: ["cd .."],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						document.querySelector('.footer').style.display = 'block';
						clear(projects);
					}
				});
			} else {
				clear(projects);
			}
		} else {
			projects();
		}
	});

	document.querySelector('.experience_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.next').style.display = 'none';
		content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$(".out").typed({
					strings: ["cd .."],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						document.querySelector('.footer').style.display = 'block';
						clear(experience);
					}
				});
			} else {
				clear(experience);
			}
		} else {
			experience();
		}
	});

	document.querySelector('.contact_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.next').style.display = 'none';
		content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$(".out").typed({
					strings: ["cd .."],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						document.querySelector('.footer').style.display = 'block';
						clear(contact);
					}
				});
			} else {
				clear(contact);
			}
		} else {
			contact();
		}
	});

}

document.addEventListener('DOMContentLoaded', main)