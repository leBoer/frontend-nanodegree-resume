
var name = 'Christian Borresen';
var formattedName =
  HTMLheaderName.replace('%data%', name);

// var role = 'Web Developer';
// var formattedRole =
//   HTMLheaderRole.replace('%data%', role);

// var skills = ['html', 'css', 'javascript','Git'];
// var formattedSkills =
//   HTMLskills.replace('%data%', skills);

// var email = 'Christianborre@gmail.com';
// var formattedEmail =
//   HTMLemail.replace('%data%', email);

// var mobile = '+47 977 80 867';
// var formattedMobile =
//   HTMLmobile.replace('%data%', mobile);

// var welcome = 'Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you';
// var formattedWelcome =
//   HTMLwelcomeMsg.replace('%data%', welcome);

// var bioPic = 'images/me.jpg';
// var formattedbioPic =
//   HTMLbioPic.replace('%data%', bioPic);

// $('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
// $('#header').append(formattedSkills);
// $('#header').append(formattedEmail);
// $('#header').append(formattedMobile);
// $('#header').append(formattedWelcome);
var work = {
  'jobs': [
  {
    'employer': 'Teekay',
    'title': 'Project Engineer',
    'location': 'Stavanger, Norway',
    'dates': '2011 - Present',
    'description': 'Various tasks in the shipping company, mainly responsible for Maintenance Management.'
  },
  {
    'employer': 'Transocean',
    'title': 'Intern',
    'location': 'The North Sea',
    'dates': 'Summer of 2010',
    'description': 'Summer internship on an offshore drilling rig in the North Sea.'
  }
  ]
}

var projects = {
  'projects': [
  {
    'title': 'Online Resume',
    'dates': 'December 2015',
    'description': 'Creating an online resume as part or the Udacity Nanodegree. Includes Javascript',
    'images': ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    'title': 'Future Project',
    'dates': 'January 2016',
    'description': 'A future project that I will be working on in the future. Very futuristic.',
    'images': ["images/197x148.gif", "images/197x148.gif"]
  }
  ]
}

var bio = {
  'name' : 'Christian',
  'role' : 'Web Developer',
  'welcomeMessage' : 'Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you',
  'contacts' : {
    'mobile' : '+47 977 80 867',
    'email' : 'christianborre@gmail.com',
    'github' : 'leBoer',
    'twitter' : '@christian7567',
    'location' : 'Norway'
  },
  'skills': [
  'JS', 'HTML', 'CSS', 'Git'
  ],
  'bioPic': 'images/me.jpg'
}

var education = {
  'schools': [
  {
    'name': 'NTNU',
    'location': 'Trondheim',
    'degree': 'Masters',
    'majors': ['Marine Technology'],
    'dates': 'August 2004 - May 2011',
    'url': 'www.NTNU.edu'
  },
  {
    'name': 'Nanyang',
    'location': 'Singapore',
    'degree': 'Under Grad Subjects',
    'majors': ['Marine Technology'],
    'dates': 'August 2009 - May 2010',
    'url': 'www.NTU.edu.sg'
  }
  ],
  'onlineCourses': [
  {
    'title': 'Frontend Nanodegree',
    'school': 'Udacity',
    'dates': 'October 2015 - Present',
    'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }
  ]
}

if(bio.skills.length > 0){

  $('#header').append(HTMLskillsStart);
  
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
  $('#skills').append(formattedSkill);
}

function displayWork() {
  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
    $('.work-entry:last').append(formattedWorkEmployer.concat(formattedWorkTitle));
    var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
    $('.work-entry:last').append(formattedLocation);
    var formattedDates = HTMLworkDates.replace('%data%',job.dates);
    $('.work-entry:last').append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace('%data%',job.description);
    $('.work-entry:last').append(formattedDescription);
  }
);
}

displayWork();

//Collecting Click Locations
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


//Adds the Internationalize Button
function inName(name){
  var nameArray = name.split(' ');
  nameArray[0] = nameArray[0].toLowerCase();
  nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
  nameArray[1] = nameArray[1].toUpperCase();
  var nameString = nameArray.join(' ');
  return nameString;
}

$('#main').append(internationalizeButton);

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(formattedProjectTitle);
    $('.project-entry:last').append(formattedProjectDates);
    $('.project-entry:last').append(formattedProjectDescription);

//Adds the images
    for (var k = 0; k < projects.projects[i].images.length; k++) {
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[k])
      $('.project-entry:last').append(formattedProjectImage);
    };
  };
}

projects.display();

$('#mapDiv').append(googleMap);