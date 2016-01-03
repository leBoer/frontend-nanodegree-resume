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
  ],
  'display': function() {
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
    )
  }
};

var projects = {
  'projects': [
  {
    'title': 'Online Resume',
    'dates': 'December 2015',
    'description': 'Creating an online resume as part or the Udacity Nanodegree. Includes Javascript',
    'images': ['images/197x148.gif', 'images/197x148.gif']
  },
  {
    'title': 'Future Project',
    'dates': 'January 2016',
    'description': 'A future project that I will be working on in the future. Very futuristic.',
    'images': ['images/197x148.gif', 'images/197x148.gif']
  }
  ],
  'display': function() {
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
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[k]);
      $('.project-entry:last').append(formattedProjectImage);
    };
  };
}
};

var bio = {
  'name' : 'Christian Borresen',
  'role' : 'Web Developer',
  'welcomeMessage' : 'Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you',
  'contacts' : {
    'mobile' : '+47 977 80 867',
    'email' : 'christianborre@gmail.com',
    'github' : 'leBoer',
    'twitter' : '@christian7567',
    'location' : 'Norway'
  },
  'skills': ['JS', 'HTML', 'CSS', 'Git'],
  'bioPic': 'images/me.jpg',
  'display' : function() {
    var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedHeaderRole);
    $('#header').prepend(formattedHeaderName);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);

    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedLocation);

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
  }
};

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
  ],
  'display' : function() {
    for (var i = 0; i < education.schools.length; i++) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);

      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedSchoolName);
      $('.education-entry:last').append(formattedSchoolLocation);
      $('.education-entry:last').append(formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);

//Adds the array of Majors (in my case there are only one in each school)
      for (var k = 0; k < education.schools[i].majors.length; k++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[k]);
        $('.education-entry:last').append(formattedSchoolMajor);
      };
}
//Adds the online courses
    $('.education-entry:last').append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);

      $('.education-entry:last').append(formattedOnlineTitle);
      $('.education-entry:last').append(formattedOnlineSchool);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineURL);
    };
  }
};


//Calls the functions to display the content of the resume
work.display();
projects.display();
bio.display();
education.display();


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

$('#map-div').append(googleMap);