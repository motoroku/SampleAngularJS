angular.module('colorset', ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/colors", {templateUrl: "../color-list.html", controller: ColorController})
    console.log("hoge")
        .when("/colors/:colorId", {templateUrl: "../color-detail.html", controller: ColorDetailController})
        .otherwise({redirectTo: "/colors"});
}]);

myapp = angular.module('app', []).config()
    .controller(myapp.ColorController, [$scope])