import {localStorageService} from './local-storage-service';

let coreModule = angular.module('coreServices', [])
.factory('localStorageService', localStorageService);
export {coreModule};