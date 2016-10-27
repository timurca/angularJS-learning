var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    liCount();   
    $scope.name = 'Main - List No. 1';
    $scope.handle = liCount;
    

    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    
    liCount();
    $scope.name = 'Second - List No. 2';
    $scope.handle = liCount;
    
}]);


var liCount = function(){
    var ul = document.getElementById('thelist');
    var li = ul.getElementsByTagName('li').length;
    console.log(li);
}
