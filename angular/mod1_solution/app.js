(function() {
    'use strcit';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController); 
    function LunchCheckController($scope,
        $filter,
        $injector) {
            $scope.lunchMenu = '';
            $scope.message = '';
            $scope.messageStyle = {};
    
            $scope.checkIfTooMuch = function(){
                let items = $scope.lunchMenu.split(',').filter(item => item.trim() !== '');
    
                if (items.length === 0) {
                    $scope.message = 'Please enter data first';
                    $scope.messageStyle = {'color': 'red', 
                                        'border-style': 'solid', 
                                        'border-color': 'red'};
                  } else if (items.length <= 3) {
                    $scope.message = 'Enjoy!';
                    $scope.messageStyle = {'color': 'green', 
                                        'border-style': 'solid', 
                                        'border-color': 'green'};
                  } else {
                    $scope.message = 'Too much!';
                    $scope.messageStyle = {'color': 'green', 
                                        'border-style': 'solid', 
                                        'border-color': 'green'};
                  }
                };
        };


})();