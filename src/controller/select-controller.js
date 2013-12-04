function SelectController($scope) {
    $scope.colorList = colorList;
    $scope.item = item;
    $scope.num = $scope.item.number;
    $scope.departmentList = department;
    $scope.departmentTops = (function(){
        var list = [];
        var j = 0;
        for(var i = 0;i<$scope.departmentList.length;i++){
            if($scope.departmentList[i].upperId == null){
                list[j] = $scope.departmentList[i];
                j++;
            }
        }
        return list;
    })();
    $scope.departmentMiddles = null;
    $scope.departmentBottoms = null;
    $scope.departmentTop = null;
    $scope.departmentMiddle = null;

    $scope.addColor = function(){
        $scope.colorList.push({"name":$scope.newItem.name,"id":$scope.newItem.id,"color":$scope.newItem.color,"number":$scope.colorList.length});
    }

    $scope.getItem = function(){
        $scope.newItem = angular.extend({},$scope.item);
    }

    $scope.initItem = function(){
        $scope.item = $scope.colorList[0];
    }

    $scope.changeTopDepartment = function(){
        $scope.departmentMiddles = []
        $scope.departmentBottoms = []
        var j = 0;
        for(var i = 0;i<$scope.departmentList.length;i++){
            if($scope.departmentTop.id==$scope.departmentList[i].upperId){
                $scope.departmentMiddles[j] = $scope.departmentList[i];
                j++
            }
        }
    }

    $scope.changeMiddleDepartment = function(){
        $scope.departmentBottoms = []
        var j = 0;
        for(var i = 0;i<$scope.departmentList.length;i++){
            if($scope.departmentMiddle.id==$scope.departmentList[i].upperId){
                $scope.departmentBottoms[j] = $scope.departmentList[i];
                j++
            }
        }
    }

    $scope.chageBottomDepartment = function(){

    }
}