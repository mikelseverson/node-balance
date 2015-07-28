var app = angular.module('app', []);

app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    $scope.balance;
    $scope.balances = [];
    $scope.getBalance = function(){
        return $http.get('/getBalance')
            .success(function(data) {
                $scope.balances.push(data);
            });
    };
}]);