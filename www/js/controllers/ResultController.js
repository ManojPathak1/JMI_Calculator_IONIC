starter.controller('ResultController', function($scope, $rootScope, $ionicPopup,
                                                $ionicPlatform, $location, ChartService,
                                                CalculateService, DatabaseService){
  $scope.absoluteSPI = CalculateService.getPointer();
  $scope.percentage = CalculateService.getPercentage();
  /*$scope.chartData = [$scope.percentage, 100-$scope.percentage];*/
  $ionicPlatform.onHardwareBackButton(function() {
    //do your stuff
    console.log("Hello");
    $ionicPopup.alert
    ({
      title: 'Empty Fields !',
      template: 'Please fill the information.'
    });
  });
  var promise = ChartService.getData($scope.absoluteSPI);
  promise.then(function(o){
    $scope.labels = o.label;
    $scope.data = o.data;
  });
  $scope.saveResult = function(){
    DatabaseService.save($scope.absoluteSPI, $scope.percentage);
  }
});
