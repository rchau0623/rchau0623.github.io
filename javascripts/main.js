function type_open(link, folder) {
	const open = document.createElement('div');
	open.setAttribute('class', 'open');

	const cd = document.querySelector('.cd')

	open.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links` + folder + `</span><span class="symbol">$</span>
<span class="open_command"></span>
`;

	cd.style.display = 'none';
	cd.parentNode.insertBefore(open, cd)

	$('.open_command').typed({
		strings: ['xdg-open ' + link],
		showCursor: false,
		typeSpeed: 8,	
		loop: false,
		callback: function() {
			// $('.typed-cursor").hide();
			cd.style.display = 'block';
		}
	});
}

function xdg(folder) {
	if (document.querySelector('.github')) {
		document.querySelector('.github').addEventListener('click', function(evt) {
			type_open('GitHub', folder);
		});
	}

	if (document.querySelector('.linkedin')) {
		document.querySelector('.linkedin').addEventListener('click', function(evt) {
			type_open('LinkedIn', folder);
		});
	}

	if (document.querySelector('.resume')) {
		document.querySelector('.resume').addEventListener('click', function(evt) {
			type_open('Resume.pdf', folder);
		});
	}

	if (document.querySelector('.email')) {
		document.querySelector('.email').addEventListener('click', function(evt) {
			type_open('Email', folder);
		});
	}
}

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
██║  ██║   ██║   ██║  ██║██║ ╚███║ ██╗
╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝ ╚═╝


I am currently a senior at NYU studying Math and Computer Science. 

I enjoy solving problems, mulling over movies, reading out loud, and aspiring to be healthy. 
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

	$('.command1').typed({
		strings: ['cat About.txt'],
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
	const content = document.querySelector('.content')

	const line1 = document.createElement('div');
	line1.setAttribute('class', 'line1');
	line1.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="command1"></span>
`;

	const line2 = document.createElement('div');
	line2.setAttribute('class', 'line2');
	line2.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command2"></span>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<a class="file">Smoodify</a>
<a class="file">BlackJack</a>
`;

	const line3 = document.createElement('div');
	line3.setAttribute('class', 'line3');
	line3.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command3"></span>
`;

	const output2 = document.createElement('div');
	output2.setAttribute('class', 'output2');
	output2.innerHTML = `

`;

	const cd = document.createElement('div');
	cd.setAttribute('class', 'cd');
	cd.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="out"></span>
`;

	const footer = document.createElement('div');
	footer.setAttribute('class', 'footer');
	footer.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="clear"></span>
`;
	content.appendChild(line1);

	$('.command1').typed({
		strings: ['cd Projects'],
		showCursor: false,
		typeSpeed: 10,	
		loop: false,
		callback: function() {
			// $('.typed-cursor").hide();
			content.appendChild(line2);
			$('.command2').typed({
				strings: ['ls'],
				showCursor: false,
				typeSpeed: 100,	
				loop: false,
				callback: function() {
					// $('.typed-cursor").hide();
					line2.appendChild(output1);
					content.appendChild(line3);
					$('.command3').typed({
						strings: ['cat Smoodify'],
						showCursor: false,
						typeSpeed: 10,	
						loop: false,
						callback: function() {
							// $('.typed-cursor").hide();
							line3.appendChild(output2)
							content.appendChild(cd);
							footer.style.display = 'none';
							content.appendChild(footer);
						}
					});
				}
			});
		}
	});
}

/*
Causes some asynchronous issues. Sad.....

function type_command(line, output, command, str, speed, next) {
	document.querySelector('.content').appendChild(line);
	$(command).typed({
		strings: [str],
		showCursor: false,
		typeSpeed: speed,	
		loop: false,
		callback: function() {
			// $('.typed-cursor").hide();
			if (output) {
				line.appendChild(output);
			}
			next();
		}
	});
}
*/

function experience() {
	const content = document.querySelector('.content')

	const line1 = document.createElement('div');
	line1.setAttribute('class', 'line1');
	line1.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="command1"></span>
`;

	const line2 = document.createElement('div');
	line2.setAttribute('class', 'line2');
	line2.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Experience</span><span class="symbol">$</span>
<span class="command2"></span>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<a class="file">Skills</a>
<a class="file">Work Experience</a>
<a class="file">Education</a>
<a href="Ryan_Chau-Resume.pdf" rel="noopener noreferrer" target="_blank" class="resume file">Resume.pdf</a>
`;

	const line3 = document.createElement('div');
	line3.setAttribute('class', 'line3');
	line3.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Experience</span><span class="symbol">$</span>
<span class="command3"></span>
`;

	const output2 = document.createElement('div');
	output2.setAttribute('class', 'output2');
	output2.innerHTML = `
<span>
	<pre>
<b>TECHNICAL SKILLS:</b>
<small>
  • <b>Programming Languages:</b> Java, JavaScript, Python, C, SQL, MATLAB, HTML, CSS
  • <b>Framework & Tools:</b> Node.js, AngularJS, Mongoose, MongoDB, MEAN Stack, handlebars, LaTeX, Git, Agile, Scrum, VBA, Processing, Unity, Excel, Pivot Tables, Linux (Ubuntu), Photoshop
</small>

<b>OTHER SKILLS:</b>
<small>
  • <b>Professional Skills:</b> Customer Relations, Records Management
  • <b>Languages:</b> English (native), Mandarin (native), Spanish (intermediate proficiency)
</small>
	</pre>
</span>
`;

	const line4 = document.createElement('div');
	line4.setAttribute('class', 'line4');
	line4.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Experience</span><span class="symbol">$</span>
<span class="command4"></span>
`;

	const output3 = document.createElement('div');
	output3.setAttribute('class', 'output3');
	output3.innerHTML = `
<span>
	<pre>
<b>New York City Department of Transportation</b> • Office of Records Management Intern
<i>New York, NY (June 2017 — September 2017)</i>
<small>
  • Worked under the Department of Litigations in the Office of Records Management.
  • Used VBA to recompile large, antiquated spreadsheets into Excel for legibility and versatility.
  • Entered and categorized data from records across every department within the Department of Transportation.
  • Organized records for legal disposal and reclassified any older records that lacked or contained inaccurate metadata.
  • Attended meetings regarding transitioning information management systems as a technical consultant
</small>

<b>Fuhu Inc. (Mazarine nabi cares)</b> • Data Analyst Intern 
<i>El Segundo, CA (June 2015 — July 2015)</i>
<small>
  • Worked under the Innovations and Customer Service Departments.
  • Analyzed call volumes to render predictive charts used in managing limited resources.
  • Used pivot tables to generate weekly reports that kept metrics on resource utilization and case content.
  • Led the formulation of a cohesive internship program as the first intern.
</small>

<b>Nina Footwear Corp.</b> • Sourcing and Production Intern 
<i>New York, NY (July 2013 — August 2013)</i>
<small>
  • Worked under the Sourcing and Production Department of Children Apparel and Accessories.
  • Assisted in the structuring of an organization system for files, samples, and resources.
</small>
	</pre>
</span>
`;

	const line5 = document.createElement('div');
	line5.setAttribute('class', 'line5');
	line5.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Experience</span><span class="symbol">$</span>
<span class="command5"></span>
`;

	const output4 = document.createElement('div');
	output4.setAttribute('class', 'output4');
	output4.innerHTML = `
<span>
	<pre>
<b>New York University</b> • Bachelors in Mathematics and Computer Science
<i>New York, NY (September 2015 — Present)</i>
<small>
  • <b>Expected graduation:</b> May 2018
  • <b>Relevant Coursework:</b> Abstract Algebra, Partial Differential Equations, Data Structures, Real Analysis, Computer Systems, Discrete Mathematics, Operating Systems, Algorithms, Theory of Probability, Algorithmic Problem Solving, Numerical Computing, Applied Internet Technology, Machine Learning, Database Design and Web Implementation, Open Source Software Development, Software Engineering
</small>

<b>Stony Brook University</b> • Bachelors in Applied Mathematics and Statistics, and Computer Science
<i>Stony Brook, NY (August 2014 — May 2015)<i>
<small>
  • <b>Relevant Coursework:</b> Philosophical Engineering, Calculus III, Linear Algebra, Ordinary Differential Equations
 </small>
	</pre>
</span>
`;

	const cd = document.createElement('div');
	cd.setAttribute('class', 'cd');
	cd.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Experience</span><span class="symbol">$</span>
<span class="out"></span>
`;

	const footer = document.createElement('div');
	footer.setAttribute('class', 'footer');
	footer.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links</span><span class="symbol">$</span>
<span class="clear"></span>
`;

	/*
	Causes some asynchronous issues. Sad.....

	type_command(line1, null, '.command1', 'cd Experience', 5, 
		type_command(line2, output1, '.command2', 'ls', 100, 
			type_command(line3, output2, '.command3', 'cat Skills', 5, 
				type_command(line4, output3, '.command4', 'cat Previous', 5, 
					type_command(line5, output4, '.command5', 'cat Education', 5, function() {
						content.appendChild(cd);
						xdg('/Experience');
						footer.style.display = 'none';
						content.appendChild(footer);
					})
				)
			)
		)
	);
	*/

	content.appendChild(line1);
	$('.command1').typed({
		strings: ["cd Experience"],
		showCursor: false,
		typeSpeed: 10,	
		loop: false,
		callback: function() {
			// $(".typed-cursor").hide();
			content.appendChild(line2);
			$(".command2").typed({
				strings: ["ls"],
				showCursor: false,
				typeSpeed: 100,	
				loop: false,
				callback: function() {
					// $(".typed-cursor").hide();
					line2.appendChild(output1);
					content.appendChild(line3);
					$(".command3").typed({
						strings: ["cat Skills"],
						showCursor: false,
						typeSpeed: 5,	
						loop: false,
						callback: function() {
							// $(".typed-cursor").hide();
							line3.appendChild(output2);
							content.appendChild(line4);
							$(".command4").typed({
								strings: ["cat Work\\ Experience"],
								showCursor: false,
								typeSpeed: 5,	
								loop: false,
								callback: function() {
									// $(".typed-cursor").hide();
									line4.appendChild(output3);
									
									content.appendChild(line5);
									$(".command5").typed({
										strings: ["cat Education"],
										showCursor: false,
										typeSpeed: 5,	
										loop: false,
										callback: function() {
											// $(".typed-cursor").hide();
											line5.appendChild(output4);
											
											content.appendChild(cd);
											xdg('/Experience');
											footer.style.display = 'none';
											content.appendChild(footer);
										}
									});
								}
							});
						}
					});
				}
			});
		}
	});
}

function contact() {
	const content = document.querySelector('.content')

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
<a href="https://github.com/rchau0623" rel="noopener noreferrer" target="_blank" class="github file">GitHub</a>
<a href="https://linkedin.com/in/rchau0623" rel="noopener noreferrer" target="_blank" class="linkedin file">LinkedIn</a>
<a href="Ryan_Chau-Resume.pdf" rel="noopener noreferrer" target="_blank" class="resume file">Resume.pdf</a>
<a href="mailto:rchau@nyu.edu" class="email file">Email</a>
`;

	const cd = document.createElement('div');
	cd.setAttribute('class', 'cd');
	cd.innerHTML = `
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

	$('.command1').typed({
		strings: ['cd Contact'],
		showCursor: false,
		typeSpeed: 10,	
		loop: false,
		callback: function() {
			// $('.typed-cursor").hide();
			content.appendChild(line2);
			$('.command2').typed({
				strings: ['ls'],
				showCursor: false,
				typeSpeed: 100,	
				loop: false,
				callback: function() {
					// $('.typed-cursor").hide();
					line2.appendChild(output1);
					content.appendChild(cd);
					xdg('/Contact');
					footer.style.display = 'none';
					content.appendChild(footer);
				}
			});
		}
	});
}

function clear(callback) {
	const content = document.querySelector('.content')

	$('.clear').typed({
		strings: ['clear'],
		showCursor: false,
		typeSpeed: 100,
		loop: false,
		callback: function() {
			// $('.typed-cursor").hide();
			content.innerHTML = ''; 
			callback();
		}
	});
}

function main() {

	document.querySelector('.about_link').addEventListener('click', function(evt) {
		evt.preventDefault();

		document.querySelector('.next').style.display = 'none';
		const content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$('.out').typed({
					strings: ['cd ..'],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						// $('.typed-cursor").hide();
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
		const content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$('.out').typed({
					strings: ['cd ..'],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						// $('.typed-cursor").hide();
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
		const content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$('.out').typed({
					strings: ['cd ..'],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						// $('.typed-cursor").hide();
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
		const content = document.querySelector('.content')

		if (content.innerHTML.trim() !== '') {
			if (document.querySelector('.out')) {
				$('.out').typed({
					strings: ['cd ..'],
					showCursor: false,
					typeSpeed: 100,
					loop: false,
					callback: function() {
						// $('.typed-cursor").hide();
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