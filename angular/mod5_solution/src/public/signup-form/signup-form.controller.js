(function() {
    'use strict';

    angular.module('public')
    .controller('SignupFormController', SignupFormController);

    SignupFormController.$inject = ['MenuService', 'UserDataService'];

    function SignupFormController(MenuService, UserDataService) {
        var $ctrl = this;

        $ctrl.user = {};
        $ctrl.message = '';

        $ctrl.submitForm = function() {
            if ($ctrl.signupForm.$valid) {
                MenuService.checkMenuItem($ctrl.user.favoriteMenuNumber).then(function(response) {
                    if (response) {
                        $ctrl.user.favoriteMenu = response.name;
                        $ctrl.user.favoriteMenuDescription = response.description;
                        console.log($ctrl.user);
                        UserDataService.saveUserInfo($ctrl.user);
                        $ctrl.message = 'Your information has been saved.';
                    } else {
                        $ctrl.message = 'No such menu number exists.';
                    }
                });
            }
        };
        
        $ctrl.validateMenuItem = function() {
            if ($ctrl.user.favoriteMenuNumber) {
                MenuService.checkMenuItem($ctrl.user.favoriteMenuNumber)
                    .then(function(menuItem) {
                        if (menuItem) {
                            $ctrl.menuItemError = false;
                        } else {
                            $ctrl.menuItemError = true;
                            $ctrl.menuItemErrorMessage = 'No such menu number exists.';
                        }
                    });
            }
        };
        
    }
})();
