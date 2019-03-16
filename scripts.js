***************************************************************************************/
* Author: Karina Enriquez using sources below:

     Title: Ghibli App
*    Author: Rascia, Tania
*    Date: 2017
*    Availability: https://www.taniarascia.com/
*
***************************************************************************************/
//var referenceNumber;
//var referenceId = document.getElementById('reference');

const app = document.getElementById('searchCriteria');
//had to use crossorigin.me b/c I kept getting "Origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
var api = 'https://mytms.us.dsv.com/utiservices/tracking/simple/json/reference/?id='+ app;
var request = new XMLHttpRequest();
 

request.open('GET', api, true);
request.responseType = 'json';
request.send();
//heading1 can be the id# then p1 is rest of data etc.

request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(referenceId => {
  // Log each referenceID
  //console.log(searchCriteria);

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = searchCriteria;

      const p = document.createElement('p');
      //movie.description = movie.description.substring(0, 300);
      p.textContent = status;

      const p2 = document.createElement('p2');
      p2.textContent = actualPickupDate;

      const p3 = document.createElement('p3');
      p3.textContent = actualDeliveryDate;

      const p4 = document.createElement('p4');
      p4.textContent = originCity;


      const p5 = document.createElement('p5');
      p5.textContent = destinationCity;



      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      care.appendChild(p1);
      care.appendChild(p2);
      care.appendChild(p3);
      care.appendChild(p4);
      care.appendChild(p5);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
