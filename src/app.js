angular.module('colorset',["ngRoute"]).config(["$routeProvider","$locationProvider", function($routeProvider,$locationProvider){
    $routeProvider
        .when("/colors",{templateUrl:"/color-list.html", controller:ColorController})
        .when("/colors/:colorId",{templateUrl:"/color-detail.html",controller:ColorDetailController})
        .otherwise({redirectTo:"/colors"});

    $locationProvider.html5Mode(true);
}]);