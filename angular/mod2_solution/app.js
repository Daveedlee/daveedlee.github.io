angular.module('ShoppingListCheckOff', []);

angular.module('ShoppingListCheckOff')
.controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
  var toBuy = this;
  
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
  toBuy.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}])
.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
  var alreadyBought = this;
  
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}]);


angular.module('ShoppingListCheckOff')
.service('ShoppingListCheckOffService', function() {
  var service = this;
  
  
  var toBuyItems = [
    { name: "cookies", quantity: 10, pricePerItem: 2 }
    
  ];
  
  var boughtItems = [];
  
  service.buyItem = function(itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(item);
  };
  
  service.getToBuyItems = function() {
    return toBuyItems;
  };
  
  service.getBoughtItems = function() {
    return boughtItems;
  };
});

angular.module('ShoppingListCheckOff')
.filter('angularDollars', function() {
  return function(input) {
    return '$$$' + input.toFixed(2);
  };
});
