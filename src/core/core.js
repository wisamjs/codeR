import {candidateService} from './candidate-service';

let coreModule = angular.module('coreServices', [])
.factory('candidateService', candidateService);
export {coreModule};