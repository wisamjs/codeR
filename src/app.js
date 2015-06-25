angular
  .module('app', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home')

//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl:'sections/home/home.html'
//     })
//     .state('candidates', {
//       url: '/candidates',
//       templateUrl: 'sections/candidates/candidates.html'
//     })
// })

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "sections/main.html"
    })
    .state('app.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "sections/home/home.html",
        }
      }
    })
        .state('app.candidates', {
      url: "/candidates",
      views: {
        'home-tab': {
          templateUrl: "sections/candidates/candidates.html"
        }
      }
    })
  });