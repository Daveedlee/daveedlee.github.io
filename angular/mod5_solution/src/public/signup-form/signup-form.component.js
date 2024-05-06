(function() {
    'use strict';

    angular.module('public')
    .component('signupForm', {
        templateUrl: 'src/public/signup-form/signup-form.html',
        controller: 'SignupFormController',
        controllerAs: 'signupCtrl'
    });
})();
