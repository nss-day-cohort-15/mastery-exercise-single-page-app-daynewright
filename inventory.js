
var Carlot = (function(carlot){
    var inventory = [];

    carlot.getInventory = function(){
        return inventory;
    }

    carlot.loadInventory = function(cb){
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.addEventListener("load", function (evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        cb(inventory);
      });
      inventoryLoader.send();
    }

    return carlot;

})(Carlot || {})
