import {candidateComponent} from './candidate-component';
import {candidateService} from './candidate-service';
let candidateModule =
  angular.module('candidate', [])
  .directive('candidate', candidateComponent)
  .factory('candidateService', candidateService);

  export {candidateModule};