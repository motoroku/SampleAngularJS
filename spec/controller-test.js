describe("sample", function () {
    var $injector;
    var myScope;
    var myScope2;
    var ctrl;
    var result;
    var service
    var flag = false;

    beforeEach(module("sampleApp"))
    beforeEach(inject(function ($controller, $rootScope, $injector) {
        myScope = $rootScope.$new();
        myScope2 = $rootScope.$new();
        service = $injector.get("sampleService");
        if (flag) {
            ctrl = $controller("TempController", {$scope: myScope, sampleService: {
                getColorJson: function () {
                    result = 100;
                }
            }});
        } else {
            ctrl = $controller("TempController", {$scope: myScope, sampleService: service});
        }
    }))

    it("green", function () {
        console.log(result);
        console.log(myScope.hoge);
        if (flag) {
            expect(result).toEqual(100);
        }
        else {
            expect(myScope.hoge).toEqual("hoge");
        }
    });

//    it("red", function() {
//        //demonstrates use of custom matcher
//        expect(a).toBe(2);
//    });
});