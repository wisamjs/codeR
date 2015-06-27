'use strict';

class userFormController{
  constructor(){
    this.project = {
      name: '',
      requirements: '',
      description: '',
      label: ''
    };
  }

  makeLabel(){
    this.project.labels = this.project.requirements.split(' ');
  }


}


export {userFormController};