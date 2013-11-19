
function ColorCtrl($scope, $http) {
    $scope.colors = [
        {"name": "桜色", "kana": "さくらいろ", "color": "#fef4f4"},
        {"name": "黄金", "kana": "こがね", "color": "#e6b422"},
        {"name": "櫨染", "kana": "はじぞめ", "color": "#d9a62e"}
    ]
    $http.get("src/colors.json").success(function(data){
        for(var i = 0; i<data.length;i++){data[i].like=0};
       $scope.colors = data;
    });
};

function ColorListItemController($scope){
  $scope.increment=function(){
      $scope.color.like++;
  }
};

function ColorDetailController($scope,$routeParams){
    $scope.colorId = $routeParams.colorId;
};

function TempController($scope){
    $scope.hoge = "hoge";
    $scope.fuga = "fuga";
    $scope.click = function(){
        var parentScope = angular.element($('#color')).scope();
        $scope.beforeColor = parentScope.colors[0];
        $scope.editColor = angular.extend({},parentScope.colors[0]);

    }

}