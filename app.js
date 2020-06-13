'use strict';

//======Salmon Cookie Store=========

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var dailyTotalCookieSales = 0;
// got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}    
          
function SalmonCookieStore(name, minNumCustomerOne, maxNumCustomerOne, avNumCookiePurOne){
  this.name = name;
  this.minNumCustomerOne = minNumCustomerOne;
  this.maxNumCustomerOne = maxNumCustomerOne;
  this.avNumCookiePurOne = avNumCookiePurOne;
  this.dailySales = [];
  this.dailyTotalCookieSales = 0;
   }
          
   //=======================================
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
//=====================================
    SalmonCookieStore.prototype.calculateCookieSales = function(){
      for(var i = 0; i < storeHours.length; i++){
        
        var randomNumber = getRandomInclusive(this.minNumCustomerOne, this.maxNumCustomerOne);
        
        var hourlySales = Math.round(randomNumber * this.avNumCookiePurOne);
        this.dailySales.push(hourlySales);
        this.dailyTotalCookieSales += hourlySales;
      };
      
    }
   //========================================== 
  function totalCookiesSold(){
    var table = document.getElementById('CookieTable');

    var tableRow = document.createElement('tr');
    var tableTotal = document.createElement('td');  
    tableTotal.textContent = 'Totals';
    tableRow.appendChild(tableTotal);  
    var allStoriesTotals = 0;
    for(var i = 0; i < storeHours.length; i++){
       var totalThisHour = 0;
        for(var j = 0; j < allStores.length; j++){
         totalThisHour += allStores[j].dailySales[i];
        }
      var tableData = document.createElement('td'); 
      tableData.textContent = totalThisHour;
      allStoriesTotals += totalThisHour; 
      tableRow.appendChild(tableData);                
    }
    var allTotal = document.createElement('td');
    allTotal.textContent = allStoriesTotals;
    tableRow.appendChild(allTotal);
    table.appendChild(tableRow);
  }

  var seattleStore = new SalmonCookieStore('Seattle Salmon', 23, 65,6.3);
  seattleStore.calculateCookieSales();
  
  var tokyoStore = new SalmonCookieStore('Tokyo Salmon', 3, 24, 1.2);
  tokyoStore.calculateCookieSales();
  
  
  var dubaiStore = new SalmonCookieStore('Dubai Salmon', 11, 38, 3.7);
  dubaiStore.calculateCookieSales();
  
  
  var parisStore = new SalmonCookieStore('Paris Salmon', 20, 38, 2.3);
  parisStore.calculateCookieSales();
  
  
  var limaStore = new SalmonCookieStore('Lima Salmon', 2, 16, 4.6);
  limaStore.calculateCookieSales();
 //================================ 
  
  var allStores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
  
  
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
    var totalCell = document.createElement('td');
    totalCell.textContent = this.dailyTotalCookieSales;
    tableRow.appendChild(totalCell);
    table.appendChild(tableRow);
    
  }
//===========form=========
  var newWorldStore = document.getElementById('newStore');

  newWorldStore.addEventListener('submit', addNewStore);

  function addNewStore(eventStore){ 
    eventStore.preventDefault();

    var name = eventStore.target.nameStore.value;

    var minNumCustomerOne = eventStore.target.minCustomer.value;

    var maxNumCustomerOne = eventStore.target.maxCustomer.value;

    var avNumCookiePurOne = eventStore.target.avCookiePur.value;
    console.log(name, minNumCustomerOne, maxNumCustomerOne, avNumCookiePurOne);
  
   var newCookieStore = new SalmonCookieStore(name, minNumCustomerOne, maxNumCustomerOne, avNumCookiePurOne);
   allStores.push(newCookieStore);
   newCookieStore.calculateCookieSales();
   refreshTable();
  }
  //======refreshing the table====
  function refreshTable(){
    clearcontent('CookieTable');
    for(var i = 0; i < allStores.length; i++){
      allStores[i].renderSalmonCookieStore();
    }
    totalCookiesSold();
  }
  
  function clearcontent(clear){
    //https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
    document.getElementById(clear).innerHTML ='';
  }
 
  //==========================
  SalmonCookieStore.prototype.renderSalmonCookieStore = renderSalmonCookieStore;
  seattleStore.renderSalmonCookieStore();
  
  tokyoStore.renderSalmonCookieStore();
  
  dubaiStore.renderSalmonCookieStore();
  
  parisStore.renderSalmonCookieStore();
  
  limaStore.renderSalmonCookieStore();

  totalCookiesSold();