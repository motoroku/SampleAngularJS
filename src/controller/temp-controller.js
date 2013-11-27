function TempController($scope, sampleService) {
    var parentScope;
    currentIndex = 0;
    $scope.currentPosition = 1;
    $scope.hoge = sampleService.getHoge();
    $scope.postStatus = 000;

    sampleService.getColorJson(function (data) {
        $scope.fuga = data;
    })

    $scope.reload = function () {
        parentScope = angular.element($('#color')).scope();
        $scope.beforeColor = parentScope.colors[currentIndex];
        $scope.editColor = angular.extend({}, parentScope.colors[currentIndex]);
    }
    $scope.submit = function () {
        $scope.beforeColor = $scope.editColor;
        parentScope.colors[currentIndex] = $scope.editColor;
    }
    $scope.next = function () {
        if (parentScope != null && currentIndex < parentScope.colors.length - 1) {
            currentIndex++
        } else {
            currentIndex = 0;
        }
        this.reload();
        $scope.currentPosition = currentIndex + 1;
    }

    $scope.posting = function () {
        sampleService.postColor($scope.editColor.name, function (data, status) {
            $scope.postStatus = status
        });
    };

    sampleService.postColor("no posting",function (data, status) {
        $scope.postStatus = status;
    });
};
