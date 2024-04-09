(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true,
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.searchTerm = "";
        narrow.found = [];

        narrow.getMatchedMenuItems = function () {
            if (narrow.searchTerm.trim() === "") {
                narrow.found = [];
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
            promise.then(function (response) {
                narrow.found = response;
                console.log(narrow.found)
            }).catch(function (error) {
                console.log("Errors at promise", error);
            });
        };

        narrow.removeItem = function (itemIndex) {
            narrow.found.splice(itemIndex, 1);
        };
    }

    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            }).then(function (response) {
                var allItems = [];
                Object.keys(response.data).forEach(function(categoryKey) {
                    var categoryItems = response.data[categoryKey].menu_items || [];
                    allItems = allItems.concat(categoryItems);
                });
    
                var foundItems = allItems.filter(function (item) {
                    return item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase());
                });
                
                return foundItems;
            }).catch(function (error) {
                console.error("Error fetching the menu", error);
                return [];
            });
        };
    }

})();
