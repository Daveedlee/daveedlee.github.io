(function () {

  let byeSpeaker = new Object;

  var speakWord = "Good Bye";
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  byeSpeaker.speakSimple = function(name){
    return "Good Bye " + name;
  };

  window.byeSpeaker = byeSpeaker;

})();

