starter.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'pages/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.result', {
        url: '/result',
        views: {
          'menuContent': {
            templateUrl: 'pages/result.html',
            controller: 'ResultController'
          }
        }
      })
      .state('app.savedresults', {
        url : '/savedresults',
        views: {
          'menuContent': {
            templateUrl: 'pages/savedresults.html',
            controller : 'SavedController'
          }
        }
      })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
