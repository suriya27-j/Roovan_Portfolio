"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactDetails = exports.projectDetails = exports.techStackDetails = exports.eduDetails = exports.workDetails = exports.socialMediaUrl = exports.personalDetails = exports.logos = void 0;

var _logo = _interopRequireDefault(require("./assets/logo.svg"));

var _html = _interopRequireDefault(require("./assets/techstack/html.png"));

var _css = _interopRequireDefault(require("./assets/techstack/css.png"));

var _sass = _interopRequireDefault(require("./assets/techstack/sass.png"));

var _js = _interopRequireDefault(require("./assets/techstack/js.png"));

var _react = _interopRequireDefault(require("./assets/techstack/react.png"));

var _redux = _interopRequireDefault(require("./assets/techstack/redux.png"));

var _tailwind = _interopRequireDefault(require("./assets/techstack/tailwind.png"));

var _bootstrap = _interopRequireDefault(require("./assets/techstack/bootstrap.png"));

var _vscode = _interopRequireDefault(require("./assets/techstack/vscode.png"));

var _github = _interopRequireDefault(require("./assets/techstack/github.png"));

var _git = _interopRequireDefault(require("./assets/techstack/git.png"));

var _npm = _interopRequireDefault(require("./assets/techstack/npm.png"));

var _postman = _interopRequireDefault(require("./assets/techstack/postman.png"));

var _figma = _interopRequireDefault(require("./assets/techstack/figma.png"));

var _project = _interopRequireDefault(require("./assets/projects/project1.jpg"));

var _project2 = _interopRequireDefault(require("./assets/projects/project2.jpg"));

var _project3 = _interopRequireDefault(require("./assets/projects/project3.jpg"));

var _project4 = _interopRequireDefault(require("./assets/projects/project4.jpg"));

var _project5 = _interopRequireDefault(require("./assets/projects/project5.jpg"));

var _project6 = _interopRequireDefault(require("./assets/projects/project6.jpg"));

var _logo2 = _interopRequireDefault(require("./assets/logo1.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Enter all your detials in this file
// Logo images
// Tech stack images
// Porject Images
// Logos
var logos = {
  logogradient: _logo["default"],
  logo: _logo2["default"]
}; // Enter your Personal Details here

exports.logos = logos;
var personalDetails = {
  name: "Suriya",
  tagline: "I build things for web",
  img: _logo2["default"],
  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}; // Enter your Social Media URLs here

exports.personalDetails = personalDetails;
var socialMediaUrl = {
  linkdein: "https://www.linkedin.com",
  github: "https://www.github.com",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com"
}; // Enter your Work Experience here

exports.socialMediaUrl = socialMediaUrl;
var workDetails = [{
  Position: "Frontend Web Developer",
  Company: "Company Name here",
  Location: "Bengaluru",
  Type: "Full Time",
  Duration: "Sep 2021 - Dec 2021"
}, {
  Position: "Internship",
  Company: "Company Name here",
  Location: "Bengaluru",
  Type: "Internship",
  Duration: "Sep 2021 - Dec 2021"
}, {
  Position: "Internship",
  Company: "Company Name here",
  Location: "Bengaluru",
  Type: "Internship",
  Duration: "Sep 2021 - Dec 2021"
}]; // Enter your Education Details here

exports.workDetails = workDetails;
var eduDetails = [{
  "name": "krishnasamy",
  "Location": "Cuddalore",
  "edu": "B.E",
  "Type": "full-time",
  "Duration": "2020-2024",
  "About": "I am basically fucked up"
}]; // Tech Stack and Tools

exports.eduDetails = eduDetails;
var techStackDetails = {
  html: _html["default"],
  css: _css["default"],
  js: _js["default"],
  react: _react["default"],
  redux: _redux["default"],
  sass: _sass["default"],
  tailwind: _tailwind["default"],
  bootstrap: _bootstrap["default"],
  vscode: _vscode["default"],
  postman: _postman["default"],
  npm: _npm["default"],
  git: _git["default"],
  github: _github["default"],
  figma: _figma["default"]
}; // Enter your Project Details here

exports.techStackDetails = techStackDetails;
var projectDetails = [{
  title: "Project title 1",
  image: _project["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}, {
  title: "Project title 2",
  image: _project2["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}, {
  title: "Project title 3",
  image: _project3["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}, {
  title: "Project title 4",
  image: _project4["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}, {
  title: "Project title 5",
  image: _project5["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}, {
  title: "Project title 6",
  image: _project6["default"],
  description: "This is sample project description random things are here in description This is sample\nproject lorem ipsum generator for dummy content",
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://google.com",
  githubLink: "https://github.com"
}]; // Enter your Contact Details here

exports.projectDetails = projectDetails;
var contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890"
};
exports.contactDetails = contactDetails;