(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
        var ctrl = this;
        
        ctrl.$onInit = function () {
            MenuDataService.getAllCategories()
                .then(function (response) {
                    ctrl.items = response;
                })
                .catch(function (error) {
                    console.error('Error loading categories:', error);
                });
        };
    }
})();
