(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', []);

  angular.module('ShoppingListCheckOff')
  .controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
      let toBuy = this;

      toBuy.items = ShoppingListCheckOffService.getToBuyItems();

      toBuy.buyItem = function(itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
      };
  }])

  .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
      let alreadyBought = this;

      alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }]);

  angular.module('ShoppingListCheckOff')
  .service('ShoppingListCheckOffService', function() {
      let service = this;

      let toBuyItems = [
          { name: "cookies", quantity: 10, pricePerItem: 2 },
          { name: "croissants", quantity: 20, pricePerItem: 5 },
          { name: "milk", quantity: 10, pricePerItem: 1 },
          { name: "coffee", quantity: 10, pricePerItem: 3 },
          
      ];

      let boughtItems = [];

      service.buyItem = function(itemIndex) {
          let item = toBuyItems.splice(itemIndex, 1)[0];
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
})();
