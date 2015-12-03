
var name = "Christian";
var formattedName =
  HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole =
  HTMLheaderRole.replace("%data%", role);

var skills = ["html", "css", "javascript","Git"];
var formattedSkills =
  HTMLskills.replace("%data%", skills);

var email = "Christianborre@gmail.com";
var formattedEmail =
  HTMLemail.replace("%data%", email);

var mobile = "+47 977 80 867";
var formattedMobile =
  HTMLmobile.replace("%data%", mobile);

var welcome = "Welcome to my resume. I am pleased to have you here. Have a look around and let me know if I can help you";
var formattedWelcome =
  HTMLwelcomeMsg.replace("%data%", welcome);

var bioPic = "images/me.jpg";
var formattedbioPic =
  HTMLbioPic.replace("%data%", bioPic);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#header").append(formattedSkills);
//$("#header").append(formattedEmail);
//$("#header").append(formattedMobile);
//$("#header").append(formattedWelcome);


var bio = {
  "name" : formattedName,
  "role" : formattedRole,
  "contacts" : {
    "mobile" : formattedMobile,
    "email" : formattedEmail,
    "github" : "leBoer",
    "twitter" : "@christian7567",
    "location" : "Norway"
  },
  "welcomeMessage" : formattedWelcome,
  "skills" : formattedSkills,
  "image" : formattedbioPic
};

var work = {
};

var education = {
};

work.position = "Engineer";
work.employer = "Teekay";
work.years = "4.5";
work.location = "Stavanger";

education["name"] = "NTNU";
education["years"] = "5 years";
education["city"] = "Trondheim";

bio["email"] = formattedEmail;

$("#header").append(work["position"]);
$("#header").append(education.name);
$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.email);
$("#header").append(bio.mobile);
$("#header").append(bio.image);
$("#header").append(bio.welcomeMessage);
$("#header").append(bio.skills);