'use strict';

//=====Seattle=====
/*
ul 
  li name: Seattle
  li minimum customers
  li maximum customers
  li average cookie sale
    */
 
   var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

   function getRandomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

var seattleCookies = {
name : 'Seattle',
  minNumCustomerOne : 23,
  maxNumCustomerOne : 65,
  avNumCookiePurOne : 6.3,
  dailySales :[],
  dailyTotalSales : [],
  calculateCookieSales : function(){
    // this function needs to generate simulated cookie sales each hour
    
    for(var i = 0; i < storeHours.length; i++){
      
      var randomNumber = getRandomInclusive(this.minNumCustomerOne, this.maxNumCustomerOne);
      
      var hourlySales = Math.round(randomNumber * this.avNumCookiePurOne);
      this.dailySales.push(hourlySales);
    };

    // calculateDailySales: function(){
    //   var dailyTotalCookieSales = 0;
    //   for(var i = 0; i < this.dailySales.length; i++){
    //     dailyTotalCookieSales = dailyTotalCookieSales + this.dailySales[i];
    //   }
    //   return this.dailyTotalCookieSales.push(dailyTotalSales);
    // }
    
  },
    render : function(){
    var seattleCookieUnList = document.getElementById('seattle-ul');
    var newSeattleListItem = document.createElement('li');
    newSeattleListItem.textContent = seattleCookies.name;
    seattleCookieUnList.appendChild(newSeattleListItem);

    
   var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

    for(var i = 0; i < this.dailySales.length; i++){
    var seattleCookieHour = document.createElement('li');
    seattleCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
    seattleCookieUnList.appendChild(seattleCookieHour);

    }
  }
  
}

seattleCookies.calculateCookieSales();
//seattleCookie.calculateDailySales();
seattleCookies.render();

// //=======Tokyo======
// /*
// ul 
//   li name: Tokyo
//   li minimum customers
//   li maximum customers
//   li average cookie sale
// */
var tokyoCookies = {
  name : 'Tokyo',
    minNumCustomerTwo : 3,
    maxNumCustomerTwo : 24,
    avNumCookiePurTwo : 1.2,
    dailySales :[],
    calculateCookieSalesTwo : function(){
      // this function needs to generate simulated cookie sales each hour
      
      for(var i = 0; i < storeHours.length; i++){
        
        var randomNumber = getRandomInclusive(this.minNumCustomerTwo, this.maxNumCustomerTwo);
        
        var hourlySales = Math.round(randomNumber * this.avNumCookiePurTwo);
        this.dailySales.push(hourlySales);
      };

        // calculateDailySales: function(){
    //   var dailyTotalCookieSales = 0;
    //   for(var i = 0; i < this.dailySales.length; i++){
    //     dailyTotalCookieSales = dailyTotalCookieSales + this.dailySales[i];
    //   }
    //   return dailyTotalSales;
    // }
      
    },
    render : function(){
      var tokyoCookieUnList = document.getElementById('tokyo-ul');
      var newTokyoListItem = document.createElement('li');
      newTokyoListItem.textContent = tokyoCookies.name;
      tokyoCookieUnList.appendChild(newTokyoListItem);
  
      
     var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
  
      for(var i = 0; i < this.dailySales.length; i++){
      var tokyoCookieHour = document.createElement('li');
      tokyoCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
      tokyoCookieUnList.appendChild(tokyoCookieHour);
  
      }
    }
    
  }
  
  tokyoCookies.calculateCookieSalesTwo();
  //tokyoCookie.calculateDailySales();
  tokyoCookies.render();
//======Dubai========
/*
ul 
  li name: Dubai
  li minimum customers
  li maximum customers
  li average cookie sale
*/
var dubaiCookies = {
  name : 'Dubai',
    minNumCustomerThree : 11,
    maxNumCustomerThree : 38,
    avNumCookiePurThree : 3.7,
    dailySales :[],
    calculateCookieSalesThree : function(){
      // this function needs to generate simulated cookie sales each hour
      
      for(var i = 0; i < storeHours.length; i++){
        
        var randomNumber = getRandomInclusive(this.minNumCustomerThree, this.maxNumCustomerThree);
        
        var hourlySales = Math.round(randomNumber * this.avNumCookiePurThree);
        this.dailySales.push(hourlySales);
      };

          // calculateDailySales: function(){
    //   var dailyTotalCookieSales = 0;
    //   for(var i = 0; i < this.dailySales.length; i++){
    //     dailyTotalCookieSales = dailyTotalCookieSales + this.dailySales[i];
    //   }
    //   return dailyTotalSales;
    // }
      
    },
    render : function(){
      var dubaiCookieUnList = document.getElementById('dubai-ul');
      var newDubaiListItem = document.createElement('li');
      newDubaiListItem.textContent = dubaiCookies.name;
      dubaiCookieUnList.appendChild(newDubaiListItem);
  
      
     var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
  
      for(var i = 0; i < this.dailySales.length; i++){
      var dubaiCookieHour = document.createElement('li');
      dubaiCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
      dubaiCookieUnList.appendChild(dubaiCookieHour);
  
      }
    }
    
  }
  
  dubaiCookies.calculateCookieSalesThree();
  //dubaiCookie.calculateDailySales();
  dubaiCookies.render();

//======Paris========
/*
ul 
  li name: Paris
  li minimum customers
  li maximum customers
  li average cookie sale
*/

var parisCookies = {
  name : 'Paris',
    minNumCustomerFour : 20,
    maxNumCustomerFour : 38,
    avNumCookiePurFour : 2.3,
    dailySales :[],
    calculateCookieSalesFour : function(){
      // this function needs to generate simulated cookie sales each hour
      
      for(var i = 0; i < storeHours.length; i++){
        
        var randomNumber = getRandomInclusive(this.minNumCustomerFour, this.maxNumCustomerFour);
        
        var hourlySales = Math.round(randomNumber * this.avNumCookiePurFour);
        this.dailySales.push(hourlySales);
      };

          // calculateDailySales: function(){
    //   var dailyTotalCookieSales = 0;
    //   for(var i = 0; i < this.dailySales.length; i++){
    //     dailyTotalCookieSales = dailyTotalCookieSales + this.dailySales[i];
    //   }
    //   return dailyTotalSales;
    // }
      
    },
    render : function(){
      var parisCookieUnList = document.getElementById('paris-ul');
      var newParisListItem = document.createElement('li');
      newParisListItem.textContent = parisCookies.name;
      parisCookieUnList.appendChild(newParisListItem);
  
      
     var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
  
      for(var i = 0; i < this.dailySales.length; i++){
      var parisCookieHour = document.createElement('li');
      parisCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
      parisCookieUnList.appendChild(parisCookieHour);
  
      }
    }
    
  }
  
  parisCookies.calculateCookieSalesFour();
  //parisCookie.calculateDailySales();
  parisCookies.render();

//=======Lima=========

var limaCookies = {
  name : 'Lima',
    minNumCustomerFive : 2,
    maxNumCustomerFive : 16,
    avNumCookiePurFive : 4.6,
    dailySales :[],
    calculateCookieSalesFive : function(){
      // this function needs to generate simulated cookie sales each hour
      
      for(var i = 0; i < storeHours.length; i++){
        
        var randomNumber = getRandomInclusive(this.minNumCustomerFive, this.maxNumCustomerFive);
        
        var hourlySales = Math.round(randomNumber * this.avNumCookiePurFive);
        this.dailySales.push(hourlySales);
      };

          // calculateDailySales: function(){
    //   var dailyTotalCookieSales = 0;
    //   for(var i = 0; i < this.dailySales.length; i++){
    //     dailyTotalCookieSales = dailyTotalCookieSales + this.dailySales[i];
    //   }
    //   return dailyTotalSales;
    // }
      
    },
    render : function(){
      var limaCookieUnList = document.getElementById('lima-ul');
      var newLimaListItem = document.createElement('li');
      newLimaListItem.textContent = limaCookies.name;
      limaCookieUnList.appendChild(newLimaListItem);
  
      
     var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
  
      for(var i = 0; i < this.dailySales.length; i++){
      var limaCookieHour = document.createElement('li');
      limaCookieHour.textContent = storeHours[i] + ' :  ' + this.dailySales[i] + ' cookies';
      limaCookieUnList.appendChild(limaCookieHour);
  
      }
    }
    
  }
  
  limaCookies.calculateCookieSalesFive();
  //limaCookie.calculateDailySales();
  limaCookies.render();