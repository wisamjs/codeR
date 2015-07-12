class candidateController{
  constructor(candidateService, candidateStore, candidateActions){
    this.candidateService = candidateService;
    this.candidateStore = candidateStore;
    this.candidateActions = candidateActions;
    this.getCandidate();
    this.candidateStore.register();
  }


  addCandidate(){
    //TODO
    this.getCandidate();

  }

  skipCandidate(){
    this.getCandidate();
    this.candidateActions.updateCandidate();

  }

  getCandidate(){
    this.candidateService.getCandidate()
    .then((res) => {
      this.user = res;
    });

  }
}

candidateController.inject = ['candidateService'];

export {candidateController};