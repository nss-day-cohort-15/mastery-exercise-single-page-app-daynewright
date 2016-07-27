var CarLot = (function () {
  var inventory = [];

  return {

    getInventory: function () {
      return inventory;
    },

    loadInventory: function (cb) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.addEventListener("load", function (evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        cb(inventory);
      });
      inventoryLoader.send();
    },

    activateEvents: function() {
      document.querySelectorAll('.car-block').forEach(e => e.addEventListener('click', changeBlock));

      function changeBlock(evt){
        this.style.border = `5px solid ${evt.currentTarget.style.borderTopColor}`;
        this.style.background = "#e6e6e6";
      }

    }
  };

})();
