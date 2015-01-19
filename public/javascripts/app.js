angular.module('lego', ['ui.router', 'ngMaterial', 'ui.select'])

.run(function($rootScope){
	console.log('run');

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
    console.log(error);
  })
})

.config(function($sceDelegateProvider, $stateProvider, $urlRouterProvider, $httpProvider, $sceProvider){
	console.log('config');

  $sceProvider.enabled(false);

  console.log($httpProvider.defaults.headers.common);

	$sceDelegateProvider.resourceUrlWhitelist([
	    // Allow same origin resource loads.
	    'self'
	    // Allow loading from our assets domain.  Notice the difference between * and **.
  	]);

  $urlRouterProvider.otherwise("home");

	$stateProvider
    .state('home', {
      url: "/",
      // controller: 'homeCtrl',
      templateUrl: '/views/home'
    })
    .state('home2', {
      url: "/home2",
      controller: 'homeCtrl',
      templateUrl: '/views/home2'
    })
    .state('profile', {
      url: "/profile",
      // controller: 'homeCtrl',
      templateUrl: '/views/profile'
    })
    .state('upload', {
      url: "/upload",
      // controller: 'homeCtrl',
      templateUrl: '/views/upload'
    })
    .state('login', {
      url: "/login",
      // controller: 'homeCtrl',
      templateUrl: '/views/login'
    })
    .state('creation', {
      url: "/creation/:id",
      controller: 'creationCtrl',
      templateUrl: '/views/detail'
    })
})