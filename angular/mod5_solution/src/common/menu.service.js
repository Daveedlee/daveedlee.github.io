(function() {
  "use strict";

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
      var service = this;

      service.getCategories = function() {
          return $http.get(ApiPath + '/categories.json').then(function(response) {
              return response.data;
          });
      };

      service.getMenuItems = function(category) {
          return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function(response) {
              return response.data;
          });
      };
        service.checkMenuItem = function(shortName) {
            var url = ApiPath + '/menu_items/' + shortName[0] + '/menu_items/' + (shortName[1]-1)+ '.json';
            return $http.get(url).then(function(response) {
                return response.data ? response.data : null;
            }, function(error) {
                return null;
        });
};

  }
})();
