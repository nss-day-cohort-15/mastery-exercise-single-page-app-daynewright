
var Carlot = (function(carlot){

  var row = document.querySelector('div[class="row"]');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'inventory.json');
  xhr.addEventListener('load', didLoadData);
  xhr.send();

  function didLoadData () {
    var cars = JSON.parse(xhr.responseText).cars;

    cars.forEach(function (car) {
      row.innerHTML += `
        <div class="col-md-4 center-box" style="border: 3px solid ${car.color};">
          <h2>${car.make}</h2>
          <h1>${car.model}</h1>
          <h4>${car.year}</h4>
          <h2>$${car.price}</h2>
          <p>${car.description}</p>
          ${car.purchased ? '<h4 class="btn btn-danger" disabled> Sorry..sold. :(</h4>' : '<h4 class="btn btn-success">For SALE!</h4>'}
        </div>`
    })
  }

})(Carlot || {})
