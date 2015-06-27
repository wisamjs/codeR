'use strict';

class userFormController{
  constructor(localStorageService){
    this.localStorageService = localStorageService;
    this.baseProject = {
      name: '',
      description: '',
      labels: []
    };

    this.project = this.localStorageService.get('project') || this.baseProject;
    this.requirements = this.project.labels.join(' ');
  }

  makeProjectLabels(){
    this.project.labels = this.requirements.split(' ');
  }


  update(){
    this.makeProjectLabels();
    this.localStorageService.add('project', JSON.stringify(this.project));
  }


}

userFormController.inject = ['localStorageService'];


export {userFormController};