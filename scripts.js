var weather;

var referenceId = document.getElementById('reference');

//had to use crossorigin.me b/c I kept getting "Origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
var api = 'http://crossorigin.me/https://mytms.us.dsv.com/utiservices/tracking/simple/json/reference/?id='+referenceId;



var xhr = new XMLHttpRequest();
 
xhr.open('GET',api);
//xhr.setRequestHeader("Origin", 'https://mytms.us.dsv.com/utiservices/swagger.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    var myArr = xhr.response;
    console.log(myArr);
    gotData(myArr);
};

/*
$.ajax({
    url: api,
    success: function(data){
        var myArr = data;
        console.log(myArr);
        gotData(myArr);
    }
})
*/

var input;

function setup() {
  createCanvas(400, 200);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() 
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}