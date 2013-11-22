describe("sample", function () {
    var myScope;
    var ctrl;
    var result;
    var service;
    var httpBackEnd;
    var flag = true;

    beforeEach(module("sampleApp"))
    beforeEach(inject(function ($controller, $rootScope, $injector, $httpBackend) {
        myScope = $rootScope.$new();
        httpBackEnd = $injector.get("$httpBackend");
        httpBackEnd.when("GET", "src/colors.json").respond(200, "fuga");
        httpBackEnd.when("POST", "api/hogehoge").respond(200, "fugafuga");
        service = $injector.get("sampleService");
        if (flag) {
            //ServiceのgetHoge()をテスト用に差し替えている
            //こうするとServiceのgetHoge()以外のFunctionはそのまま使える
            service.getHoge = function () {
                result = 100
            };
            ctrl = $controller("TempController", {$scope: myScope, sampleService: service})
        } else {
            ctrl = $controller("TempController", {$scope: myScope, sampleService: service});
        }
    }))

    it("green", function () {
        httpBackEnd.expectGET("src/colors.json");
        httpBackEnd.flush();

        console.log("result:" + result);
        console.log("$scope.hoge:" + myScope.hoge);
        console.log("$scope.fuga:" + myScope.fuga);
        if (flag) {
            expect(result).toEqual(100);
        }
        else {
            expect(myScope.hoge).toEqual("hoge");
        }
        expect(myScope.fuga).toEqual("fuga");
    });

    it("post", function () {
        httpBackEnd.expectPOST("api/hogehoge");
        httpBackEnd.flush();

        expect(myScope.postStatus).toEqual(200);
    })
});