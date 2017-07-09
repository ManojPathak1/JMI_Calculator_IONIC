starter.controller('MainController', function($scope, $ionicSideMenuDelegate){
  $scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
});
