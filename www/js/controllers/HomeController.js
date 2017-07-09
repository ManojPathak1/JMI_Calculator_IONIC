starter.controller('HomeController',
  function($scope, HomeService, $ionicPopup, $state, $location,
           DataFactory, $ionicLoading, $timeout){
    /*$scope.$on('$ionicView.beforeEnter', function (event, data) {*/ // For loading controller.
      $scope.pointers = [];
      $scope.check = function(){
        $scope.pointers = [$scope.semPointer1, $scope.semPointer2, $scope.semPointer3,
          $scope.semPointer4, $scope.semPointer5, $scope.semPointer6,
          $scope.semPointer7, $scope.semPointer8 ];
        var isValid = HomeService.isValid($scope.pointers);
        DataFactory.pointers = $scope.pointers;
        DataFactory.count = isValid.count;
        if(isValid.status=="EMPTY")
        {
          $ionicPopup.alert({
            title : 'Empty Fields !',
            template : 'Please fill the information.'
          });
        }
        else if(isValid.status)
        {
          $ionicLoading.show({
            template: 'Calculating...',
            duration: 500
          }).then(function(){
            $timeout(function(){
              $location.path('app/result');
            }, 500);
          });
        }
        else
        {
          $ionicPopup.alert({
            title : 'Invalid form of data !',
            template : 'Please fill the information properly'
          });
        }
      };
    /*});*/
});
