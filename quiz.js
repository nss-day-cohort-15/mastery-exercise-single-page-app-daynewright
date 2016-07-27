

(function(){
  var row = document.querySelector('div[class="row"]');

  function populatePage(cars) {
    // Loop over the inventory and populate the page
    cars.forEach(function(car) {
      row.innerHTML += `
        <div class="col-md-4 center-box car-block" style="border: 3px solid ${car.color};">
          <h2>${car.make}</h2>
          <h1>${car.model}</h1>
          <h4>${car.year}</h4>
          <h4 style="color: ${car.color};">${car.color}</h4>
          <h2>$${car.price}</h2>
          <p>${car.description}</p>
          ${car.purchased ? '<h4 class="btn btn-danger" disabled> Sorry..sold. :(</h4>' : '<h4 class="btn btn-success">For SALE!</h4>'}
        </div>`;
    })

    // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  CarLot.loadInventory(populatePage);

})()
