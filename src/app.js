angular.module('colorset', ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/colors", {templateUrl: "sample/color-list.html", controller: ColorController})
    console.log("hoge")
        .when("/colors/:colorId", {templateUrl: "sample/color-detail.html", controller: ColorDetailController})
        .otherwise({redirectTo: "/colors"});
}]);

angular.module("sampleApp", ["ngRoute"])
//    .config(["$routeProvider", function ($routeProvider) {
//        $routeProvider.when("/colors", {templateUrl: "/templates/color-list.html", controller: ColorController});
//        $routeProvider.when("/colorDetail", {templateUrl: "/templates/color-detail.html", controller: ColorDetailController});
//        $locationProvider.html5Mode(true);
//    }])
    .controller("ColorController", ColorController)
    .controller("ColorListItemController", ColorListItemController)
    .controller("ColorDetailController", ColorDetailController)
    .controller("TempController", TempController)
    .controller("SelectController", SelectController)
    .controller("CheckController",CheckController)
    .service("sampleService", SampleService);
