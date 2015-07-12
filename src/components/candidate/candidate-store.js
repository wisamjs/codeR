let candidateStore = angular.module('candidate-store', [])
  .factory('candidateStore', ($http, $q, localStorageService, R, Dispatcher) => {

    function updateCandidate() {
    };

    function register() {
      Dispatcher.register(function(payload) {
        if (payload.actionType === 'update-candidate') {
          updateCandidate()
        }
      })
    }

    return {
      register
    }

  });

  export {candidateStore};
