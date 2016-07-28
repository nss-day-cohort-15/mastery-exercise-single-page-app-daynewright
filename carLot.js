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
      var carBlock = document.querySelectorAll('.car-block');
      var input = document.querySelector('input');
      var descript;

      carBlock.forEach(e => e.addEventListener('click', changeBlock));
      input.addEventListener('keypress', updateDescription);

      function changeBlock(evt){
        document.querySelector('input').removeEventListener('keyup', changeDescript);

        this.style.border = `5px solid ${evt.currentTarget.style.borderTopColor}`;
        this.style.background = "#e6e6e6";
        input.focus();
        input.value = "";

        descript = evt.currentTarget.childNodes[11];
      }

      function changeDescript(evt){
        descript.innerHTML = "";
        descript.innerHTML += evt.target.value;
      }

      function updateDescription(descript){
        document.querySelector('input').addEventListener('keyup', changeDescript);
     }

    }
  };

})();
