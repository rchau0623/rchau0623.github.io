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
		typeSpeed: 2,	
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

<img src="img/name.png" alt="name">

I am currently a senior at NYU studying Math and Computer Science, looking for full time employment. 

I enjoy solving problems, mulling over movies, reading out loud, and aspiring to be healthy. 

Welcome to my Linux terminal based website. For the highlights, please checkout my <b><a href="Ryan_Chau-Resume.pdf">resume</a></b>.

For nontechnical people, I apologize that my website may be a bit confusing. Links to navigate through the website are located on the third line, under the ls command, always. For technical people, I hope you enjoy my use of theme as an excuse for minimalism. 
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
		typeSpeed: 2,	
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
<div></div>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<a href="#smoodify" class="file">Smoodify</a>
<a href="#chairs" class="file">RealFakeChairsDotCom</a>
<a href="#blackjack" class="file">Blackjack</a>
<a href="#platforms" class="file">Err...Platforms...</a>
<a href="#supercilious" class="file">Supercilious Scoundrel</a>
`;

	const line3 = document.createElement('div');
	line3.setAttribute('class', 'line3');
	line3.setAttribute('id', 'smoodify');
	line3.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command3"></span>
`;

	const output2 = document.createElement('div');
	output2.setAttribute('class', 'output2');
	output2.innerHTML = `
<span>
	<pre>
<b>Smoodify</b>
<a href="smoodify.herokuapp.com">Live Demo</a> • <a href="https://github.com/nyu-software-engineering/mood-music-player">GitHub</a>
<small>
  • Building a music streaming application that dynamically understands the user's mood and generates a playlist based on it.
  • Users can create profiles, connect their Spotify accounts, and use the application to play music.
  • Plan to implement a neural network for the purposes of mood classification.

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, AngularJS, HTML, CSS, Mongoose, MongoDB, Passport.js, Spotify Web API.</i>

Currently in development.
</small>
	</pre>
</span>
`;

	const line4 = document.createElement('div');
	line4.setAttribute('class', 'line4');
	line4.setAttribute('id', 'chairs');
	line4.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command4"></span>
`;

	const output3 = document.createElement('div');
	output3.setAttribute('class', 'output3');
	output3.innerHTML = `
<span>
	<pre>
<b>RealFakeChairsDotCom</b>
<a href="https://github.com/rchau0623/RealFakeChairsDotCom">GitHub</a>
<small>	
  • Building a website for a mock online chair company using JavaScript and the Express module.
  • Utilizing HTML, CSS, and handlebars to build the user interface.
  • Employing Mongoose and MongoDB to store and query product and user data. 

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, HTML, CSS, Mongoose, MongoDB, handlebars, Passport.js, Stripe API.</i>

Built in Fall 2017.
</small>
	</pre>
</span>
`;

	const line5 = document.createElement('div');
	line5.setAttribute('class', 'line5');
	line5.setAttribute('id', 'blackjack');
	line5.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command5"></span>
`;

	const output4 = document.createElement('div');
	output4.setAttribute('class', 'output4');
	output4.setAttribute('id', 'blackjack');
	// <a href="">Live Demo</a> • 
	output4.innerHTML = `
<span>
	<pre>
<b>Blackjack</b>
<a href="https://github.com/rchau0623/Blackjack">GitHub</a>
<small>	
  • Created a player vs cpu game of blackjack using JavaScript and DOM manipulation.
  • Uses a single 52 deck of cards, and allows the user to rig the deck with their own chosen cards.
  • Cards placed on top of the deck by the user will be injected into the deck. 
  • Event Listeners manage all user interaction. 

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, HTML, CSS, DOM Manipulation.</i>

Built in Fall 2017.
</small>
	</pre>
</span>
`;

	const line6 = document.createElement('div');
	line6.setAttribute('class', 'line6');
	line6.setAttribute('id', 'platforms');
	line6.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command6"></span>
`;

	const output5 = document.createElement('div');
	output5.setAttribute('class', 'output5');
	output5.innerHTML = `
<span>
	<pre>
<b>Err... Platforms...</b>
<a href="https://github.com/rchau0623/Err...Platforms...">GitHub</a>
<small>
  • Created a 2D two-player fighting game in Unity.
  • The objective is to squish the other player by pushing floating platforms into them.
  • Platforms start off floating in space and move when bumped by players.
  • Platforms bounce off of walls and each other, resulting in increased entropy. 

  • <b>Technologies:</b> <i>Unity, C#.</i>

Built in Fall 2017.
</small>
	</pre>
</span>
`;

	const line7 = document.createElement('div');
	line7.setAttribute('class', 'line7');
	line7.setAttribute('id', 'supercilious');
	line7.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command7"></span>
`;

	const output6 = document.createElement('div');
	output6.setAttribute('class', 'output6');
	output6.innerHTML = `
<span>
	<pre>
<b>Supercilious Scoundrel</b>
<a href="https://github.com/rchau0623/Supercilious-Scoundrel">GitHub</a>
<small>
  • Created a 2D platforming game in Processing. 
  • The objective is to collect honey while avoiding being stung by bees. 
  • Bees become faster and larger for every five dollops of honey collected.
  • Number of bees grow exponentially for every 10 dollops of honey collected.

  • <b>Technologies:</b> <i>Processing, Java.</i>

Built in Fall 2017.
</small>
	</pre>
</span>
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
		typeSpeed: 2,	
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
					output1.style.display = 'inline-block';
					output1.classList.add('animated', 'pulse');
					content.appendChild(line3);
					$('.command3').typed({
						strings: ['cat Smoodify'],
						showCursor: false,
						typeSpeed: 2,	
						loop: false,
						callback: function() {
							// $('.typed-cursor").hide();
							line3.appendChild(output2)
							content.appendChild(line4);
							$('.command4').typed({
								strings: ['cat RealFakeChairsDotCom'],
								showCursor: false,
								typeSpeed: 2,	
								loop: false,
								callback: function() {
									// $('.typed-cursor").hide();
									line4.appendChild(output3)
									content.appendChild(line5);
									$('.command5').typed({
										strings: ['cat Blackjack'],
										showCursor: false,
										typeSpeed: 2,	
										loop: false,
										callback: function() {
											// $('.typed-cursor").hide();
											line5.appendChild(output4)
											content.appendChild(line6);
											$('.command6').typed({
												strings: ['cat Smoodify'],
												showCursor: false,
												typeSpeed: 2,	
												loop: false,
												callback: function() {
													// $('.typed-cursor").hide();
													line6.appendChild(output5)
													content.appendChild(line7);
													$('.command7').typed({
														strings: ['cat Smoodify'],
														showCursor: false,
														typeSpeed: 2,	
														loop: false,
														callback: function() {
															// $('.typed-cursor").hide();
															line7.appendChild(output6)
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
							});
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
<div></div>
`;

	const output1 = document.createElement('div');
	output1.setAttribute('class', 'output1');
	output1.innerHTML = `
<a href="skills" class="file">Skills</a>
<a href="experience" class="file">Work Experience</a>
<a href="education" class="file">Education</a>
<a href="Ryan_Chau-Resume.pdf" rel="noopener noreferrer" target="_blank" class="resume file">Resume.pdf</a>
`;

	const line3 = document.createElement('div');
	line3.setAttribute('class', 'line3');
	line3.setAttribute('id', 'skills');
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
	line4.setAttribute('id', 'experience');
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
	line5.setAttribute('id', 'education');
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
<i>Stony Brook, NY (August 2014 — May 2015)</i>
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
		typeSpeed: 2,	
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
					output1.style.display = 'inline-block';
					output1.classList.add('animated', 'pulse');
					content.appendChild(line3);
					$(".command3").typed({
						strings: ["cat Skills"],
						showCursor: false,
						typeSpeed: 2,
						loop: false,
						callback: function() {
							// $(".typed-cursor").hide();
							line3.appendChild(output2);
							content.appendChild(line4);
							$(".command4").typed({
								strings: ["cat Work\\ Experience"],
								showCursor: false,
								typeSpeed: 2,	
								loop: false,
								callback: function() {
									// $(".typed-cursor").hide();
									line4.appendChild(output3);
									
									content.appendChild(line5);
									$(".command5").typed({
										strings: ["cat Education"],
										showCursor: false,
										typeSpeed: 2,
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
<div></div>
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
		typeSpeed: 2,	
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
					output1.style.display = 'inline-block';
					output1.classList.add('animated', 'pulse');
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
		typeSpeed: 70,
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