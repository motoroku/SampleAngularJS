describe("sample", function() {
    var a
    var $injector;
    var myScope;
    var myScope2;
    var ctrl;
    var ctrl2;

    beforeEach(function() {
        a = 1;
        $injector = angular.injector();
        console.log($injector);
    });
    beforeEach(module("sampleApp"))
    beforeEach(inject(function($controller,$rootScope){
        myScope = $rootScope.$new();
        myScope2 = $rootScope.$new();
        ctrl = $controller("ColorController",{$scope:myScope});
        ctrl2 = $controller("ColorCtrl",{$scope:myScope2});
    }))

    it("green", function() {
       // console.log($scope.colors);

        //demonstrates use of custom matcher
        expect(ctrl.tempMessage).toBe("hello");
        expect(myScope.colors[0].name).toBe("桜色");
        expect(myScope2.colors[0].name).toBe("桜色");
    });

//    it("red", function() {
//        //demonstrates use of custom matcher
//        expect(a).toBe(2);
//    });
});