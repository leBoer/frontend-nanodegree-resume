
// var name = "Christian";
// var formattedName =
//   HTMLheaderName.replace("%data%", name);

// var role = "Web Developer";
// var formattedRole =
//   HTMLheaderRole.replace("%data%", role);

// var skills = ["html", "css", "javascript","Git"];
// var formattedSkills =
//   HTMLskills.replace("%data%", skills);

// var email = "Christianborre@gmail.com";
// var formattedEmail =
//   HTMLemail.replace("%data%", email);

// var mobile = "+47 977 80 867";
// var formattedMobile =
//   HTMLmobile.replace("%data%", mobile);

// var welcome = "Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you";
// var formattedWelcome =
//   HTMLwelcomeMsg.replace("%data%", welcome);

// var bioPic = "images/me.jpg";
// var formattedbioPic =
//   HTMLbioPic.replace("%data%", bioPic);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#header").append(formattedSkills);
// $("#header").append(formattedEmail);
// $("#header").append(formattedMobile);
// $("#header").append(formattedWelcome);
var work = {
  "jobs": [
  {
    "employer": "Teekay",
    "title": "Project Engineer",
    "location": "Stavanger, Norway",
    "dates": "2011 - Present",
    "description": "Various tasks in the shipping company, mainly responsible for Maintenance Management."
  },
  {
    "employer": "Transocean",
    "title": "Intern",
    "location": "The North Sea",
    "dates": "Summer of 2010",
    "description": "Summer internship on an offshore drilling rig in the North Sea."
  }
  ]
}

var projects = {
  "projects": [
  {
    "title": "Online Resume",
    "dates": "December 2015",
    "description": "Creating an online resume as part or the Udacity Nanodegree. Includes Javascript",
    "images": {
      "resumeimg1": "images/197x148.gif",
      "resumeimg2": "images/197x148.gif"
    }
  },
  {
    "title": "Future Project",
    "dates": "January 2016",
    "description": "A future project that I'll be working on in the future. Very futuristic.",
    "images": {
      "futurepic1": "images/197x148.gif",
      "futurepic2": "images/197x148.gif"
    }
  }
  ]
}

var bio = {
  "name" : "Christian",
  "role" : "Web Developer",
  "welcomeMessage" : "Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you",
  "contacts" : {
    "mobile" : "+47 977 80 867",
    "email" : "christianborre@gmail.com",
    "github" : "leBoer",
    "twitter" : "@christian7567",
    "location" : "Norway"
  },
  "skills": [
  "JS", "HTML", "CSS", "Git"
  ],
  "bioPic": "images/me.jpg"
}

var education = {
  "schools": [
  {
    "name": "NTNU",
    "city": "Trondheim",
    "degree": "Masters",
    "majors": ["Marine Technology"],
    "dates": "August 2004 - May 2011",
    "url": "www.NTNU.edu"
  },
  {
    "name": "Nanyang",
    "city": "Singapore",
    "degree": "Under Grad Subjects",
    "majors": ["Marine Technology"],
    "dates": "August 2009 - May 2010",
    "url": "www.NTU.edu.sg"
  }
  ],
  "onlineCourses": [
  {
    "title": "Frontend Nanodegree",
    "school": "Udacity",
    "dates": "October 2015 - Present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
  ]
}

$("#header").append(HTMLheaderName);

if(bio.skills.length > 0){

  $("#header").append(HTMLskillsStart);
  
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}
var formattedWorkStart;
var formattedWorkEmployer;
var formattedWorkTitle;

// work.jobs.forEach(addJobs);

work.jobs.forEach(function(job) {
  $("#workExperience").append(HTMLworkStart);
  formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
  $(".work-entry:last").append(formattedWorkEmployer.concat(formattedWorkTitle));
});

// $("#workExperience").append(work.jobs.employer);
//work.position = "Engineer";
//work.employer = "Teekay";
//work.years = "4.5";
//work.location = "Stavanger";

//education["name"] = "NTNU";
//education["years"] = "5 years";
//education["city"] = "Trondheim";

//bio["email"] = formattedEmail;


// $("#header").append(bio.mobile);
// $("#header").append(bio.image);
// $("#header").append(bio.welcomeMessage);
// $("#header").append(bio.skills);