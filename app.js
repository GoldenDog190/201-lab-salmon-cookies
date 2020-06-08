'use strict';

//=====Seattle=====
/*
ul 
  li name: Seattle
  li minimum customers
  li maximum customers
  li average cookie sale

  <ul>
    <li>Seattle</li>
    <li>Minumum Number of Customers</li>
    <li>Maximum Number of Customers</li>
    <li>Average Number of Cookies Purchased per Customer</li>
  </ul>
*/

var seattleCookies = {
  name : 'Seattle',
  minNumCustomerOne : [],
  maxNumCustomerOne : [],
  avNumCookiePurOne : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  render : function(){
    var seattleCookieUnList = document.getElementById('seattle-ul');
    var newSeattleListItem = createElement('li');
    newSeattleListItem.textContent = seattleCookies.name;

//=========minimum customers per hour===========

    var newMinNumCustomerOne = document.createElement('li');
    newMinNumCustomerOne = 'Minimum customers : ' + this.minNumCustomerOne[0] + 'average minumum hourly customers';
    newSeattleListItem.appendChild(newMinNumCustomerOne);

    var minCustomersOne = [];

  for(var i = 0; i < this.newMinNumCustomerOne.length; i++){

    newMinNumCustomerOne = document.createElement('li');
    newMinNumCustomerOne.textContent = minCustomersOne[i] + ' : ' + this.newMinNumCustomerOne[i] + ' salmon cookies';
    newMinNumCustomerOne.appendChild(newMinNumCustomerOne);
    }  

//=========maximum customers per hour===========
  var newMaxNumCustomerOne = document.createElement('li');
    newMaxNumCustomerOne = 'Maximum customers : ' + this.minMaxCustomerOne[0] + 'average maximum hourly customers';
    newSeattleListItem.appendChild(newMaxNumCustomerOne);

    var maxCustomersOne = [];

  for(var i = 0; i < this.newMaxNumCustomerOne.length; i++){

    newMaxNumCustomerOne = document.createElement('li');
    newMaxNumCustomerOne.textContent = maxCustomersOne[i] + ' : ' + this.newMaxNumCustomerOne[i] + ' salmon cookies';
    newMaxNumCustomerOne.appendChild(newMaxNumCustomerOne);
    }  

//=====average cookies per hour===========

    var newAvNumCookiePuOne = document.createElement('li');
    newAvNumCookiePuOne = 'Shop hours : ' + this.AvNumCookiePurOne[0] + 'average cookie sales';
    newSeattleListItem.appendChild(newAvNumCookiePuOne);

    var cookiesInAdayOne =[];

    for(var i = 0; i < this.newAvNumCookiePuOne.length; i++){

    newAvNumCookiePuOne = document.createElement('li');
    newAvNumCookiePuOne.textContent = cookiesInAdayOne[i] + ' : ' + this.newAvNumCookiePuOne[i] + ' salmon cookies';
    newAvNumCookiePuOne.appendChild(newAvNumCookiePuOne);
    }
  } 
};
seattleCookies();
//=======Tokyo======
/*
ul 
  li name: Tokyo
  li minimum customers
  li maximum customers
  li average cookie sale
*/
//======Dubai========
/*
ul 
  li name: Dubai
  li minimum customers
  li maximum customers
  li average cookie sale
*/
//======Paris========
/*
ul 
  li name: Paris
  li minimum customers
  li maximum customers
  li average cookie sale
*/
//=======Lima=========
/*
ul 
  li name: Lima
  li minimum customers
  li maximum customers
  li average cookie sale
*/