(function () {

let helloSpeaker = new Object();

let speakWord = "Hello";

helloSpeaker.speak = function(name){
  console.log(speakWord + " " + name);
};

helloSpeaker.speakSimple = function(name){
  return "Hello " + name;
};

window.helloSpeaker = helloSpeaker;

}) ();
