import {coreModule} from './core';

describe('localStorageService', () => {

  beforeEach(window.module('coreServices'));
  beforeEach(window.module(initMocks));
  beforeEach(window.inject(initTestService));

  let localStorageService;
  let $windowMock;

  it('should set item to local storage', () => {
    localStorageService.add('key','val');
    expect($windowMock.localStorage.setItem.calledOnce).to.eql(true);
  });

  it('should delete item from local storage' , () => {
    localStorageService.remove('key');
    expect ($windowMock.localStorage.removeItem.calledOnce).to.eql(true);
  });

  it('should retrieve key from local storage & parse it', () => {
    localStorageService.get('test');
    expect($windowMock.localStorage.getItem.calledOnce).to.eql(true);
  });

  it('should handle retreival of keys that don\'t exist', () => {
    $windowMock.localStorage.getItem = sinon.spy();
    window.inject(initTestService);

    localStorageService.get('test');
    expect($windowMock.localStorage.getItem.calledOnce).to.eql(true);
  })


  function initTestService(_localStorageService_){
    localStorageService = _localStorageService_;
  }

  function initMocks($provide){
    $windowMock = {
      localStorage: {
        getItem: sinon.spy( function(){
          return '{\"data\":1}';

        }),
        setItem: sinon.spy(),
        removeItem: sinon.spy()
      }

    }

    $provide.service('$window', () => {
      return $windowMock;
    })

  }


});
