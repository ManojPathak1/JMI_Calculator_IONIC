starter.controller('SavedController', function($scope, DatabaseService){
  $scope.$on('$ionicView.beforeEnter', function (event, data) {
    // console.log("Inside saved controller");
    var promise = DatabaseService.getData();
    promise.then(success, failure);
    function success(obj) {
      if (obj.status) {
        $scope.absoluteSPI = obj.ccpi;
        $scope.absoluteP = obj.cp;
        $scope.status = true;
      }
      else {
        $scope.status = false;
      }
    }

    function failure(err) {
      console.log(err);
      $scope.status = false;
    }
  });
});
