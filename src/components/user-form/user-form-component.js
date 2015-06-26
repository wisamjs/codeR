import {userFormController as controller} from './user-form-controller';
import template from './user-form.html';


let userFormComponent = function(){
  return {
    restrict: 'E',
    controller,
    controllerAs: controller.name,
    template,
    bindToController: true
  }
}

export {userFormComponent};