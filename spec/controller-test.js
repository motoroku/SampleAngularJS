describe("sample", function() {
    var a
    var $injector;
    var myScope;
    var ctrl;

    beforeEach(function() {
        a = 1;
        $injector = angular.injector();
        console.log($injector);
    });
    beforeEach(module("sampleApp"))
    beforeEach(inject(function($controller,$rootScope){
        myScope = $rootScope.$new();
        ctrl = $controller("ColorController",{$scope:myScope});
    }))

    it("green", function() {
       // console.log($scope.colors);

        //demonstrates use of custom matcher
        expect(ctrl.tempMessage).toBe("hello");
        expect(myScope.colors[0].name).toBe("桜色");
    });

//    it("red", function() {
//        //demonstrates use of custom matcher
//        expect(a).toBe(2);
//    });
});