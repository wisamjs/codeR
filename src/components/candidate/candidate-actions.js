let candidateActionsModule = angular.module('candidate-actions',[])
.factory('candidateActions', (Dispatcher) => {

  function updateCandidate() {
    Dispatcher.dispatch({
      actionType: 'update-candidate',
    });
  };

  return {
    updateCandidate: updateCandidate
  }

});

export {candidateActionsModule}