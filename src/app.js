'use strict';

import '../scss/fonts.scss';
import '../bower_components/ionic/scss/ionic.scss';
import R from 'Ramda';
import mainTemplate from './sections/main.html';
import candidateTemplate from './sections/candidates/candidates.html';
import homeTemplate from './sections/home/home.html';
import {userFormModule, candidateModule} from './components/components';
import {coreModule} from './core/core';

angular.module('3rdParty', [])
.factory('R',function(){
  return R;
})


angular
  .module('app', [
    'ionic',
    '3rdParty',
    userFormModule.name,
    coreModule.name,
    candidateModule.name
    ])
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      template: mainTemplate
    })
    .state('app.home', {
      url: '/home',
      views: {
        'home-tab': {
          template: homeTemplate
        }
      }
    })
        .state('app.candidates', {
      url: '/candidates',
      views: {
        'home-tab': {
        template: candidateTemplate
      }
      }
    });
  });