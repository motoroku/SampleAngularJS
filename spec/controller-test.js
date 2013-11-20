describe("sample", function () {
    var a
    var $injector;
    var myScope;
    var myScope2;
    var ctrl;
    var ctrl2;
    var result;

    beforeEach(function () {
        a = 1;
        $injector = angular.injector();
    });
    beforeEach(module("sampleApp"))
    beforeEach(inject(function ($controller, $rootScope,$window) {
        myScope = $rootScope.$new();
        myScope2 = $rootScope.$new();
        ctrl2 = $controller("ColorCtrl", {$scope: myScope2});
        $window:{
            hoge = function(){
                result = 100;
            }
        }
    }))

    it("green", function () {
        //demonstrates use of custom matcher
        expect(myScope2.colors[0].name).toBe("桜色");
        expect(result).toEqual(100);
    });

//    it("red", function() {
//        //demonstrates use of custom matcher
//        expect(a).toBe(2);
//    });
});