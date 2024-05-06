(function() {
    'use strict';

    angular.module('common')
    .service('UserDataService', UserDataService);

    function UserDataService() {
        var service = this;
        var userInfo = {}; 

        service.saveUserInfo = function(user) {
            userInfo = user;
        };

        service.getUserInfo = function() {
            return userInfo;
        };
    }
})();
