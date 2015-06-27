import './candidate.scss';
import template from './candidate.html';
import {candidateController as controller} from './candidate-controller';

let candidateComponent = () => {
  return {
    restrict: 'E',
    controller,
    controllerAs: controller.name,
    bindToController: true,
    template
  };

};

export {candidateComponent};