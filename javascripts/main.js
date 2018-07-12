function attach() {
	document.querySelector('.about_link_footer').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.projects_link').click();
	});

	document.querySelector('.projects_link_footer').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.projects_link').click();
	});

	document.querySelector('.experience_link_footer').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.experience_link').click();
	});

	document.querySelector('.contact_link_footer').addEventListener('click', function(evt) {
		evt.preventDefault();
		document.querySelector('.contact_link').click();
	});
}

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
			evt.preventDefault();
			type_open('GitHub', folder);
			setTimeout(function () {
				window.open($('.github').attr('href'), '_blank');
			}, 700);
		});
	}

	if (document.querySelector('.linkedin')) {
		document.querySelector('.linkedin').addEventListener('click', function(evt) {
			evt.preventDefault();
			type_open('LinkedIn', folder);
			setTimeout(function () {
				window.open($('.linkedin').attr('href'), '_blank');
			}, 850);
		});
	}

	if (document.querySelector('.resume')) {
		document.querySelector('.resume').addEventListener('click', function(evt) {
			evt.preventDefault();
			type_open('Resume.pdf', folder);
			setTimeout(function () {
				window.open($('.resume').attr('href'), '_blank');
			}, 800);
		});
	}

	if (document.querySelector('.email')) {
		document.querySelector('.email').addEventListener('click', function(evt) {
			evt.preventDefault();
			type_open('Email', folder);
			setTimeout(function () {
				window.open($('.email').attr('href'), '_blank');
			}, 700);
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

<img class="about_name" src="img/name.png" alt="name">

I am new grad from NYU with a bachelors in  Math and Computer Science, looking for full time employment. 

I enjoy solving problems, mulling over movies, reading out loud, and aspiring to be healthy. 

Welcome to my Linux terminal based website. For the highlights, please checkout my <b><a href="Ryan_Chau-Resume.pdf" target="_blank" class="highlights">resume</a></b>.

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
		strings: ['cat About'],
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
	output1.setAttribute('class', 'output1 link_output');
	output1.innerHTML = `
<a href="#smoodify" class="file">Smoodify</a>
<a href="#stwickers" class="file">Stwickers</a>	
<a href="#chairs" class="file">RealFakeChairsDotCom</a>
<a href="#blackjack" class="file">Blackjack</a>
<a href="#platforms" class="file">Err... Platforms...</a>
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
<a href="https://smoodify.herokuapp.com/" target="_blank">Live Demo</a> • <a href="https://github.com/nyu-software-engineering/mood-music-player" target="_blank">GitHub</a>
<small>
  • Building a music streaming application that dynamically understands the user's mood and generates a playlist based on it.
  • Users can create profiles, connect their Spotify accounts, and use the application to play music.
  • Plan to implement a neural network for the purposes of mood classification.

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, AngularJS, HTML, CSS, MongoDB, Passport.js, Spotify Web API.</i>

Currently in development.
</small>
	</pre>
</span>
`;

	const line4 = document.createElement('div');
	line4.setAttribute('class', 'line4');
	line4.setAttribute('id', 'stwickers');
	line4.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command4"></span>
`;

	const output3 = document.createElement('div');
	output3.setAttribute('class', 'output3');
	output3.innerHTML = `
<span>
	<pre>
<b>Stwickers</b>
<a href="https://github.com/rchau0623/Stwickers" target="_blank">GitHub</a>
<small>
  •  Built a mock store that sells stickers based on Twitch.tv emoticons using JavaScript and React.js with GatsbyJS.
  • Set up a basic Node.js server to function as a REST API for the client application.
  • Uses MongoDB to query store data and store order data. 

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, React.js, GatsbyJS, HTML, CSS, MongoDB, REST API.</i>

Built in Summer 2018.
</small>
	</pre>
</span>
`;

	const line5 = document.createElement('div');
	line5.setAttribute('class', 'line5');
	line5.setAttribute('id', 'chairs');
	line5.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command5"></span>
`;

	const output4 = document.createElement('div');
	output4.setAttribute('class', 'output4');
	output4.innerHTML = `
<span>
	<pre>
<b>RealFakeChairsDotCom</b>
<a href="https://github.com/rchau0623/RealFakeChairsDotCom" target="_blank">GitHub</a>
<small>	
  • Built a website for a mock online chair company using JavaScript and the Express module.
  • Utilized HTML, CSS, and handlebars to build the user interface.
  • Stores and queries product and user data in MongoDB.

  • <b>Technologies:</b> <i>JavaScript, Node.js, Express, HTML, CSS, MongoDB, handlebars, Passport.js, Stripe API, Brain.js.</i>

Built in Fall 2017.
</small>
	</pre>
</span>
`;

	const line6 = document.createElement('div');
	line6.setAttribute('class', 'line6');
	line6.setAttribute('id', 'blackjack');
	line6.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command6"></span>
`;

	const output5 = document.createElement('div');
	output5.setAttribute('class', 'output5');
	output5.innerHTML = `
<span>
	<pre>
<b>Blackjack</b>
<a href="https://github.com/rchau0623/Blackjack" target="_blank">GitHub</a>
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

	const line7 = document.createElement('div');
	line7.setAttribute('class', 'line7');
	line7.setAttribute('id', 'platforms');
	line7.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command7"></span>
`;

	const output6 = document.createElement('div');
	output6.setAttribute('class', 'output6');
	output6.innerHTML = `
<span>
	<pre>
<b>Err... Platforms...</b>
<a href="https://github.com/rchau0623/Err...Platforms..." target="_blank">GitHub</a>
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

	const line8 = document.createElement('div');
	line8.setAttribute('class', 'line8');
	line8.setAttribute('id', 'supercilious');
	line8.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command8"></span>
`;

	const output7 = document.createElement('div');
	output7.setAttribute('class', 'output7');
	output7.innerHTML = `
<span>
	<pre>
<b>Supercilious Scoundrel</b>
<a href="https://github.com/rchau0623/Supercilious-Scoundrel" target="_blank">GitHub</a>
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

	const line9 = document.createElement('div');
	line9.setAttribute('class', 'line9');
	line9.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command9"></span>
<div></div>
`;

	const output8 = document.createElement('div');
	output8.classList.add('output8', 'link_output');
	output8.innerHTML = `
<a href="" class="about_link_footer file">About</a>
<a href="" class="projects_link_footer folder">Projects</a>
<a href="" class="experience_link_footer folder">Experience</a>
<a href="" class="contact_link_footer folder">Contact</a>
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
							line3.appendChild(output2);
							content.appendChild(line4);
							$('.command4').typed({
								strings: ['cat Stwickers'],
								showCursor: false,
								typeSpeed: 2,	
								loop: false,
								callback: function() {
									// $('.typed-cursor").hide();
									line4.appendChild(output3);
									content.appendChild(line5);
									$('.command5').typed({
										strings: ['cat RealFakeChairsDotCom'],
										showCursor: false,
										typeSpeed: 2,	
										loop: false,
										callback: function() {
											// $('.typed-cursor").hide();
											line5.appendChild(output4);
											content.appendChild(line6);
											$('.command6').typed({
												strings: ['cat Blackjack'],
												showCursor: false,
												typeSpeed: 2,	
												loop: false,
												callback: function() {
													// $('.typed-cursor").hide();
													line6.appendChild(output5);
													content.appendChild(line7);
													$('.command7').typed({
														strings: ['cat Err...\\ Platforms...'],
														showCursor: false,
														typeSpeed: 2,	
														loop: false,
														callback: function() {
															// $('.typed-cursor").hide();
															line7.appendChild(output6);
															content.appendChild(line8);
															$('.command8').typed({
																strings: ['cat Supercilious Scoundrel'],
																showCursor: false,
																typeSpeed: 2,	
																loop: false,
																callback: function() {
																	// $('.typed-cursor").hide();
																	line8.appendChild(output7);
																	content.appendChild(line9);
																	$('.command9').typed({
																		strings: ['ls ..'],
																		showCursor: false,
																		typeSpeed: 100,	
																		loop: false,
																		callback: function() {
																			line9.append(output8);
																			output8.style.display = 'inline-block';
																			output8.classList.add('animated', 'pulse');
																			attach();
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
	output1.setAttribute('class', 'output1 link_output');
	output1.innerHTML = `
<a href="#skills" class="file">Skills</a>
<a href="#experience" class="file">Work Experience</a>
<a href="#education" class="file">Education</a>
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
  • <b>Programming Languages:</b> Java, JavaScript, Python, SQL, C, C#, MATLAB, HTML, CSS
  • <b>Framework & Tools:</b> Node.js, MongoDB, MySQL, MySQL Workbench, SQLite, scikit-learn, Angular, MEAN Stack, React, Typescript, LAMP stack, pandas, LaTeX, Git, Agile Development (Scrum), VBA, Processing, Unity, Excel, Pivot Tables, Linux, Photoshop
</small>

<b>OTHER SKILLS:</b>
<small>
  • <b>Professional Skills:</b> Customer Relations, Records Management
  • <b>Languages:</b> English (native), Mandarin (native), Spanish (intermediate)
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
  • Used VBA to recompile antiquated Excel spreadsheets of ~60,000 records for legibility and versatility.
  • Entered and categorized data from records across every department within the Department of Transportation.
  • Organized records for legal disposal and reclassified any older records that lacked or contained inaccurate metadata.
  • Attended meetings regarding transitioning information management systems as a technical consultant
</small>

<b>Fuhu Inc. (Mazarine nabi cares)</b> • Data Analyst Intern 
<i>El Segundo, CA (June 2015 — July 2015)</i>
<small>
  • Analyzed call volumes to render predictive charts used in managing the schedules of ~40 employees.
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
<i>New York, NY (September 2015 — May 2018)</i>
<small>
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

	const line6 = document.createElement('div');
	line6.setAttribute('class', 'line6');
	line6.innerHTML = `
<span class="name">ryan@ryborg</span><span class="symbol">:</span><span class="path">~/Documents/Super Secret Links/Projects</span><span class="symbol">$</span>
<span class="command6"></span>
<div></div>
`;

	const output5 = document.createElement('div');
	output5.classList.add('output5', 'link_output');
	output5.innerHTML = `
<a href="" class="about_link_footer file">About</a>
<a href="" class="projects_link_footer folder">Projects</a>
<a href="" class="experience_link_footer folder">Experience</a>
<a href="" class="contact_link_footer folder">Contact</a>
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
											content.appendChild(line6);
											$(".command6").typed({
												strings: ["ls .."],
												showCursor: false,
												typeSpeed: 2,
												loop: false,
												callback: function() {
													// $(".typed-cursor").hide();
													line6.appendChild(output5);
													output5.style.display = 'inline-block';
													output5.classList.add('animated', 'pulse');
													attach();
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
	output1.setAttribute('class', 'output1 link_output');
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