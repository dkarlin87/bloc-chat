 (function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
       $stateProvider
        .state('home', {
           url: '/',
           controller: 'MainCtrl as main',
           templateUrl: '/templates/main.html'
           });
   
     }
  angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);
 })();