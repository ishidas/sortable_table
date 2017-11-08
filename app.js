'use strict';

var data = [
  {'country': 'Japan', 'capital': 'Tokyo', 'population': 127000000 },
  {'country': 'the United States of America', 'capital': 'Washington D.C.', 'population': 323100000 },
  {'country': 'Italy', 'capital': 'Rome', 'population': 60600000 },
  {'country': 'France', 'capital': 'Paris', 'population': 66900000 },
  {'country': 'the Great Britain', 'capital': 'London', 'population': 65640000 },
];

//table container
var tableContainerElement = document.querySelector('.tableContainer');
//table
var tableElement = document.createElement('table');
var header = tableElement.createTHead(0);
var newRow = header.insertRow(0);


for (var key in data[0]) {
  var newCell = newRow.insertCell();
  var newText = document.createTextNode(key + "\n");
  newCell.appendChild(newText);
}

data.forEach((dataSet) => {

});



//table appended to container
tableContainerElement.appendChild(tableElement);
