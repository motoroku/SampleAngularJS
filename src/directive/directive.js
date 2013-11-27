function InputFile() {
    return {
        restrict: 'A',
        link: function(scope,element,attributes){
            var e = angular.element(element);
            e.find("#fadeOut").bind("click",function(){
                $(e).fadeOut();
                attributes.duration
            })
            console.log("fadeout");
        }
    }
};
//
//    var linker = function ($scope, element, attributes) {
//        // onChange, push the files to $scope.files.
//        element.bind('change', function (event) {
//            var files = event.target.file;
//            $scope.$apply(function () {
//                for (var i = 0, length = files.length; i < length; i++) {
//                    $scope.files.push(files[i]);
//                }
//            });
//        });
//    };
//
//    return {
//        restrict: 'A',
//        link: linker
//    };
//}