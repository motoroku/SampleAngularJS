function CheckController($scope) {

    $scope.hoge = [];

    if ($scope.hoge == []) {
        $scope.fuga = "hoge is []";
    }
    else if($scope.hoge.toString() == null){
        $scope.fuga = "hoge is null";
    }
    else if($scope.hoge.toString() == ""){
        $scope.fuga = "hoge is ";
    }
    else if (typeof $scope.hoge == "undefined") {
        $scope.fuga = "hoge is undefined";
    }
    else if (typeof $scope.hoge != "undefined") {
        $scope.fuga = "hoge is not undefined";
    } else {
        $scope.fuga = "hoge is null?";
    }
    ;
};