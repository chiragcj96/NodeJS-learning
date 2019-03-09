// Node Event Emitter.

var events = require('events');
var util = require('util');     //using 'util' module provides access to some utility functions

var Person = function(name){      //creating the constructor 'Person'
  this.name = name;
};

util.inherits(Person, events.EventEmitter);     //using util for accessing the inherits function

var craig = new Person('craig');      //inheriting the event emitter to all the three objects created using Person constructor
var rudd = new Person('rudd');
var bruce = new Person('bruce');
var people = [craig, rudd, bruce];      //creating array
people.forEach(function(person){      //forEach is to loop to all the objects
  person.on('speak', function(msg){     //attaching a custom event('speak) to each object, here it is a message that object(person) says
    console.log(person.name + ' said: ' +msg);      //when event 'speak' triggered, calls function(msg), which checks for person who said 'person.name', and print their message.
  });
  person.on('click', function(someFunc){      //another custom event
    console.log(person.name + ' clicked.');
  });
});

craig.emit('speak', 'Hey, how are you');      //Craig 'emits' the event
bruce.emit('speak', 'hi, I am good');     //Bruce 'emits' the event
rudd.emit('click', 'there happened a click');     //Rudd 'emits' the event
