import {candidateServiceModule} from './candidate-service';

describe(`${candidateServiceModule.name}`, () => {
  let candidateService;
  let localStorageServiceMock;
  let RMock;
  let $httpMock;

  beforeEach(window.module(`${candidateServiceModule.name}`));
  beforeEach(window.module(initMocks));
  beforeEach(window.inject(initCandidateService));

  it('should make an API call when there is no new candidate', () => {
    candidateService.getCandidate();
    expect($httpMock.get.calledOnce).to.eql(true);


  });

  function initMocks($provide){

    $httpMock = sinon.spy(() => {
      return new Promise((resolve) => resolve);
    });

    localStorageServiceMock = {
      get : sinon.spy(() => {
        return {
          labels: ['AngularJs', 'UX']
        }
      })
    };

    RMock = {};

    $provide.service('localStorageService',
      () => localStorageServiceMock);

    $provide.service('R', () => RMock);
    $provide.service('$http', () => $httpMock);
    // $provide.service('$q', () => q);

  }

  function initCandidateService(_candidateService_){
    candidateService = _candidateService_;

  }

});