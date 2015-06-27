class candidateController{
  constructor(candidateService){
    this.candidateService = candidateService;
    this.getCandidate();
  }

  addCandidate(){
    //TODO
    this.getCandidate();

  }

  skipCandidate(){
    this.getCandidate();

  }

  getCandidate(){
    this.candidateService.getCandidate()
    .then((res) => {
      this.user = res.data;
      this.showLabels = this.user.skills.join(' ');
    });

  }
}

candidateController.inject = ['candidate-service'];

export {candidateController};