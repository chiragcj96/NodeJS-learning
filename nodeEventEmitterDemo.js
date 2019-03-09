// Node Event Emitter.

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var craig = new Person('craig');
var rudd = new Person('rudd');
var bruce = new Person('bruce');
var people = [craig, rudd, bruce];
people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' +msg);
  });
});

craig.emit('speak', 'Hey, how are you');
bruce.emit('speak', 'hi, I am good');
