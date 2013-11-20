angular.module('colorset', ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/colors", {templateUrl: "../color-list.html", controller: ColorController})
    console.log("hoge")
        .when("/colors/:colorId", {templateUrl: "../color-detail.html", controller: ColorDetailController})
        .otherwise({redirectTo: "/colors"});
}]);

angular.module("sampleApp",[])
    .controller("ColorController",ColorController)
    .controller("ColorListItemController",ColorListItemController)
    .controller("ColorDetailController",ColorDetailController)
    .controller("TempController",TempController)
    .service("sampleService",SampleService)