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
      var input = document.querySelector('input');
      
      document.querySelectorAll('.car-block').forEach(e => e.addEventListener('click', changeBlock));
      input.addEventListener('keypress', updateDescription);


      function updateDescription(descript){
        descript = "";
        document.querySelector('input').addEventListener('keypress', function(evt){
          descript += evt.target.value;
        });
      }

      function changeBlock(evt){
        this.style.border = `5px solid ${evt.currentTarget.style.borderTopColor}`;
        this.style.background = "#e6e6e6";
        input.focus();
        input.value = "";
        updateDescription(evt.currentTarget.childNodes[11].innerHTML);
      }

    }
  };

})();
