'use strict';

let routes =  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home')

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      template: mainTemplate
    })
    .state('app.home', {
      url: "/home",
      views: {
        'home-tab': {
          template: homeTemplate
        }
      }
    })
        .state('app.candidates', {
      url: "/candidates",
      views: {
        'home-tab': {
        template: candidateTemplate
      }
      }
    })
  };

  export {routes};
