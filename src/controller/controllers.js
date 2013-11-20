function ColorController($scope, $http) {
//    $scope.colors = [
//        {"name": "桜色", "kana": "さくらいろ", "color": "#fef4f4"},
//        {"name": "黄金", "kana": "こがね", "color": "#e6b422"},
//        {"name": "櫨染", "kana": "はじぞめ", "color": "#d9a62e"}
//    ]
    $http.get("src/colors.json").success(function (data) {
        $scope.colors = data;
        for (var i = 0; i < data.length; i++) {
            data[i].like = 0
        }
        $scope.colors = data;
    });
};

function ColorListItemController($scope) {
    $scope.increment = function () {
        $scope.color.like++;
    }
};

function ColorDetailController($scope, $routeParams) {
    $scope.colorId = $routeParams.colorId;
};

function TempController($scope, sampleService) {
    var parentScope;
    currentIndex = 0;
    $scope.currentPosition = 1;

    $scope.hoge = sampleService.getColorJson();

    $scope.reload = function () {
        parentScope = angular.element($('#color')).scope();
        $scope.beforeColor = parentScope.colors[currentIndex];
        $scope.editColor = angular.extend({}, parentScope.colors[currentIndex]);
    }
    $scope.submit = function(){
        $scope.beforeColor = $scope.editColor;
        parentScope.colors[currentIndex] = $scope.editColor;
    }
    $scope.next = function(){
        if(parentScope != null && currentIndex < parentScope.colors.length - 1){
            currentIndex++
        }else{
            currentIndex = 0;
        }
        $scope.currentPosition = currentIndex + 1;
    }
}
