import {candidateDirectiveModule} from './candidate-directive';
import {candidateServiceModule} from './candidate-service';


let candidateModule =
  angular.module('candidate', [
    candidateDirectiveModule.name,
    candidateServiceModule.name
    ]);



  export {candidateModule};
