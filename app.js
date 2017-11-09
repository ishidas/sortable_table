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
var headerTitles = Object.keys(data[0]);
var newTBody = document.createElement('tbody');



headerTitles.forEach((title) => {
  var tdCell = document.createElement('td');
  var textNode = document.createTextNode(title.toUpperCase());
  header.setAttribute('class', 'tableHeader');
  tdCell.appendChild(textNode);
  newRow.appendChild(tdCell);
});



data.forEach((countryObject) => {
  var newRowBody = document.createElement('tr');
  //iterate data object thru and construct each row
  for (var i in countryObject) {
    var tdCell = document.createElement('td');
    var textNode = document.createTextNode(countryObject[i]);
    tdCell.appendChild(textNode);
    newRowBody.appendChild(tdCell);
    newTBody.appendChild(newRowBody);
  }
});

tableElement.appendChild(newTBody);




//table appended to container
tableContainerElement.appendChild(tableElement);
