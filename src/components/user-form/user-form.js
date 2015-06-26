'use strict';
import {userFormComponent} from './user-form-component';

let userFormModule =
  angular
   .module('user-form-module', [])
   .directive('userForm', userFormComponent);

export {userFormModule};