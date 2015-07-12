import {localStorageService} from './local-storage-service';
import {Dispatcher} from './dispatcher';

let coreModule = angular.module('coreServices', [])
.service('Dispatcher', Dispatcher)
.factory('localStorageService', localStorageService);
export {coreModule};