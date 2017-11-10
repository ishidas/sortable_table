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
//getting the header data from data Obj
var headerTitles = Object.keys(data[0]);

var newTBody = document.createElement('tbody');
var iconElement, countryIconElement, capitalIconElement, populationIconElement;

//creating header
headerTitles.forEach((title) => {
  var tdCell = document.createElement('td');
  var textNode = document.createTextNode(title.toUpperCase());
  var sortIcon = document.createElement('i');
  sortIcon.setAttribute('class', 'fa fa-sort ' + title);
  sortIcon.setAttribute('aria-hidden', 'true');
  header.setAttribute('class', 'tableHeader');
  tdCell.appendChild(textNode);
  tdCell.appendChild(sortIcon);
  newRow.appendChild(tdCell);
});


//creating each row
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

//append table body to the table
tableElement.appendChild(newTBody);

//table appended to container in dom
tableContainerElement.appendChild(tableElement);
countryIconElement = document.querySelector('.country');
capitalIconElement = document.querySelector('.capital');
populationIconElement = document.querySelector('.population');
console.log(countryIconElement);
//functions
function sortTable(column) {
  var num = { country: 0, capital: 1, population: 2}
  var switching = true, asc = true, shouldSwitch = false;
  var row;

  while(switching) {
    switching = false;
    row = document.querySelector('tbody').children;
    // console.log(row);
    for (var i = 0; i < row.length -1; i++) {
      var x = row[i].children[num[column]];
      var y = row[i+1].children[num[column]];
      console.log(x);
      if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        row[i].parentNode.insertBefore(row[i+1], row[i]);
      } 
    }


  }


}





//events
countryIconElement.addEventListener('click', (event) => {
  event.preventDefault();
  sortTable('country');
  console.log(event.target.className.split(' ')[2].trim());
})

capitalIconElement.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.className.split(' ')[2].trim());
})

populationIconElement.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.className.split(' ')[2].trim());
})
