'use strict';

import '../scss/fonts.scss';
import '../bower_components/ionic/scss/ionic.scss';

import mainTemplate from './sections/main.html';
import candidateTemplate from './sections/candidates/candidates.html';
import homeTemplate from './sections/home/home.html';
import {routes} from './core/routes';

angular
  .module('app', ['ionic'])
  .config(routes);