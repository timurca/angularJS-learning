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

myApp.controller('menuController', ['$scope', function($scope) {

    $scope.name = 'Menu';


    
}]);

myApp.controller('mainController', ['$scope', function($scope) {

    $scope.name = 'List #1';
    $scope.handle = liCount('list1', 'num1'); 

    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'List #2';
    $scope.handle = liCount('list2', 'num2');
   
    
}]);


var liCount = function(list_id, output) {
    console.log(list_id); //list id: list1 
    var ul = document.getElementById(list_id);
    var li = ul.getElementsByTagName('li').length;
    console.log(li); //list length: 5
    document.getElementById(output).innerHTML = '(' + li + ')'; 
}