

var Carlot = (function(carlot){
  var addtoDOM = document.querySelector('.cars');

  carlot.populatePage = function(cars) {

    // Loop over the inventory and populate the page
    cars.forEach(function(car, index) {
      if(index % 3 === 0){
        addtoDOM.innerHTML += '<div class="row">';
      }
      addtoDOM.innerHTML += `
        <div class="col-md-4 center-box car-block" style="border: 3px solid ${car.color};">
          <h2>${car.make}</h2>
          <h1>${car.model}</h1>
          <h4>${car.year}</h4>
          <h4 style="color: ${car.color};">${car.color}</h4>
          <h2>$${car.price}</h2>
          <p>${car.description}</p>
          ${car.purchased ? '<h4 class="btn btn-danger" disabled> Sorry..sold. :(</h4>' : '<h4 class="btn btn-success">For SALE!</h4>'}
        </div>`;
      if(index % 3 === 0){
        addtoDOM.innerHTML += '</div>';
      }
    })

    // Now that the DOM is loaded, establish all the event listeners needed
    carlot.activateEvents();
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  carlot.loadInventory(carlot.populatePage);

  return carlot;


})(Carlot || {})
