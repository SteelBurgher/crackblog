var nw = require('nw.gui');
var win = nw.Window.get();
win.isMaximized = false;

// Min
document.getElementById('windowControlMinimize').onclick = function() {
  win.minimize();
};

// Close
document.getElementById('windowControlClose').onclick = function() {
  win.close();
};

// Max
document.getElementById('windowControlMaximize').onclick = function() {
  if (win.isMaximized)
    win.unmaximize();
  else
    win.maximize();
};

win.on('maximize', function() {
  win.isMaximized = true;
});

win.on('unmaximize', function() {
  win.isMaximized = false;
});

var reminders = [
  "Isn't it time to start thinking about the blog post you'll be writing today? Why don't you write about ", 
  "I think you should write about "
];

var topics = [
  "Angular.js",
  "Node Web Kit",
  "one of your favorite toy problems"
];

var composeReminder = function() {
  var reminder = reminders[Math.floor(Math.random() * reminders.length)];
  var topic = topics[Math.floor(Math.random() * topics.length)];
  return reminder + topic;
};

var header = document.createElement('h1');
header.textContent = composeReminder();
document.getElementById('reminder')
  .appendChild(header);