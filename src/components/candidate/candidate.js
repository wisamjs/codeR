import {candidateDirectiveModule} from './candidate-directive';
import {candidateServiceModule} from './candidate-service';
import {candidateActionsModule} from './candidate-actions';
import {candidateStore} from './candidate-store';

let candidateModule =
  angular.module('candidate', [
    candidateDirectiveModule.name,
    candidateServiceModule.name,
    candidateActionsModule.name,
    candidateStore.name
    ]);



  export {candidateModule};
