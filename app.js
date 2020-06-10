'use strict';



// var amelia ={
//   name: 'Amelia',
//   coolness: 99,
// }

// function Person(name,coolness){
//   this.name = name,
//   this.coolness = coolness
// }

//======Seattle=========

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var dailyTotalCookieSales = 0;
// got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


// function calculateDailySales(){
//   for(var i = 0; i < this.storeHours.length; i++){
//     var totalCookieSales = Math.round(this.dailySales[i] * this.avNumCookiePurOne);
//     this.dailyTotalCookieSales = this.dailyTotal + totalCookieSales;
//   }
//   this.dailyTotalCookieSales.push(hourlySales);
// }
// console.log('dailyTotalCookies',this.dailyTotalCookieSales);

  
  // calculateCookieSales : function(){
  //   // this function needs to generate simulated cookie sales each hour
    
  //   for(var i = 0; i < storeHours.length; i++){
      
  //     var randomNumber = getRandomInclusive(this.minNumCustomerOne, this.maxNumCustomerOne);
      
  //     var hourlySales = Math.round(randomNumber * this.avNumCookiePurOne);
  //     this.dailySales.push(hourlySales);
  //   };
    
  // },
  //   render : function(){
  //   var seattleCookieUnList = document.getElementById('seattle-ul');
  //   var newSeattleListItem = document.createElement('li');
  //   newSeattleListItem.textContent = seattleCookies.name;
  //   seattleCookieUnList.appendChild(newSeattleListItem);

    
  //  var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

  //   for(var i = 0; i < this.dailySales.length; i++){
  //   var seattleCookieHour = document.createElement('li');
  //   seattleCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
  //   seattleCookieUnList.appendChild(seattleCookieHour);

  //   }
  // }


function SalmonCookieStore(name, minNumCustomerOne, maxNumCustomerOne, avNumCookiePurOne){
  this.name = name;
  this.minNumCustomerOne = minNumCustomerOne;
  this.maxNumCustomerOne = maxNumCustomerOne;
  this.avNumCookiePurOne = avNumCookiePurOne;
  this.dailySales = [];
  this.dailyTotalCookieSales = [];
}
SalmonCookieStore.prototype.render =  function(){
  var seattleCookieUnList = document.getElementById('seattle-ul');
  var newSeattleListItem = document.createElement('li');
  newSeattleListItem.textContent = this.name;
  seattleCookieUnList.appendChild(newSeattleListItem);
  
 var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

  for(var i = 0; i < this.dailySales.length; i++){
  var seattleCookieHour = document.createElement('li');
  seattleCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
  seattleCookieUnList.appendChild(seattleCookieHour);

  }
}
SalmonCookieStore.prototype.calculateCookieSales = function(){
  // this function needs to generate simulated cookie sales each hour
  
  for(var i = 0; i < storeHours.length; i++){
    
    var randomNumber = getRandomInclusive(this.minNumCustomerOne, this.maxNumCustomerOne);
    
    var hourlySales = Math.round(randomNumber * this.avNumCookiePurOne);
    this.dailySales.push(hourlySales);
  };
  
}

var seattleStore = new SalmonCookieStore('Seattle Salmon', 23, 65,6.3);
seattleStore.calculateCookieSales();
seattleStore.render();

var tokyoStore = new SalmonCookieStore('Tokyo Salmon', 3, 24, 1.2);
tokyoStore.calculateCookieSales();
tokyoStore.render();

var dubaiStore = new SalmonCookieStore('Dubai Salmon', 11, 38, 3.7);
dubaiStore.calculateCookieSales();
dubaiStore.render();

var parisStore = new SalmonCookieStore('Paris Salmon', 20, 38, 2.3);
parisStore.calculateCookieSales();
parisStore.render();

var limaStore = new SalmonCookieStore('Lima Salmon', 2, 16, 4.6);
limaStore.calculateCookieSales();
limaStore.render();

function renderSalmonCookieStore(){
 var table = document.getElementById('CookieTable');

 var tableRow = document.createElement('tr');

 var tableCell = document.createElement('td');

 tableCell.textContent = this.name;

 tableRow.appendChild(tableCell);
 for(var i = 0; i < this.dailySales.length; i++){
 tableCell = document.createElement('td');
 tableCell.textContent = this.dailySales[i];
 tableRow.appendChild(tableCell);

}
table.appendChild(tableRow);

}

SalmonCookieStore.prototype.renderSalmonCookieStore = renderSalmonCookieStore;
seattleStore.renderSalmonCookieStore();

tokyoStore.renderSalmonCookieStore();

dubaiStore.renderSalmonCookieStore();

parisStore.renderSalmonCookieStore();

limaStore.renderSalmonCookieStore();