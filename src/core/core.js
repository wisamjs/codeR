import {candidateService} from './candidate-service';
import {localStorageService} from './local-storage-service';

let coreModule = angular.module('coreServices', [])
.factory('candidateService', candidateService)
.factory('localStorageService', localStorageService);
export {coreModule};