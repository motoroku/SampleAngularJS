angular.module('colorset', ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/colors", {templateUrl: "sample/color-list.html", controller: ColorController})
    console.log("hoge")
        .when("/colors/:colorId", {templateUrl: "sample/color-detail.html", controller: ColorDetailController})
        .otherwise({redirectTo: "/colors"});
}]);

angular.module("sampleApp",["ngRoute"])
//    .config(["$routeProvider",function($routeProvider){
//        $routeProvider
//            .when("/colors",{templateUrl:"/template/color-list.html",controller:ColorController});
//    }])
    .controller("ColorController",ColorController)
    .controller("ColorListItemController",ColorListItemController)
    .controller("ColorDetailController",ColorDetailController)
    .controller("TempController",TempController)
    .controller("SelectController",SelectController)
    .service("sampleService",SampleService)
