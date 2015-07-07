import './candidate.scss';
import template from './candidate.html';
import {candidateController as controller} from './candidate-controller';

let candidateDirectiveModule = angular.module('candidate-controller', [])
  .directive('candidate', () => {
  return {
    restrict: 'E',
    controller,
    controllerAs: controller.name,
    bindToController: true,
    template
  };

});

export {candidateDirectiveModule};