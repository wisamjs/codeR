'use strict';

class userFormController{
  constructor(candidateService){
    this.candidateService = candidateService;
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