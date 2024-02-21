(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var greetings = names.reduce(function(accumulator, currentName) {
      var firstLetter = currentName.charAt(0).toLowerCase();
      if (firstLetter === 'j') {
          accumulator.bye.push(byeSpeaker.speakSimple(currentName));
      } else {
          accumulator.hello.push(helloSpeaker.speakSimple(currentName));
      }
      return accumulator;
  }, {hello: [], bye: []});

  greetings.hello.forEach(function(greeting) {
      console.log(greeting);
  });

  greetings.bye.forEach(function(greeting) {
      console.log(greeting);
  });
})();
