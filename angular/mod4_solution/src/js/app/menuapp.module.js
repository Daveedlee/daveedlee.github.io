(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router', 'data'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        });
})();
