(function() {
    'use strict';
  
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['UserDataService', 'MenuService'];
    function MyInfoController(UserDataService, MenuService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserDataService.getUserInfo();
    }
    
  })();
  