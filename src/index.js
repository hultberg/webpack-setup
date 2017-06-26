// Main entry
var $ = require('jquery');

// Stylesheets
require('bootstrap/dist/css/bootstrap.css');
require('app.css');

var container = document.createElement('div');
container.classList.add('container');

var row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

var col = document.createElement('div');
col.classList.add('col-xs-12');
row.appendChild(col);

var text = document.createElement('p');
text.innerHTML = 'Hello and welcome.';
col.appendChild(text);

var icon = document.createElement('i');
icon.classList.add('glyphicon');
icon.classList.add('glyphicon-ok');
text.appendChild(icon);

document.body.appendChild(container);

