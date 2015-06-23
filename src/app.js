angular
  .module('app', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl:'sections/home/home.html'
  })
})
