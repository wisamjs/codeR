let candidateService = ($http, $q, localStorageService) => {
  const API_URL = 'http://localhost:3000/api/people';
  let candidates = [];
  let usedIDs = [];
  let nextID = 0;

  let isUsed = (num) => {
    return usedIDs.indexOf(num) !== -1;
  };

  let allUsed = () => {
    return usedIDs.length === 26;
  };

  let clearUsed = () => {
    usedIDs.length = 0;
  };

  let getChosenSkills = () => {
    return localStorageService.get('project').labels;

  }

  let saveCandidates = (res) => {

    clearUsed();
    candidates = res.data;
    return res;

  }

  let getAllCandidates = () => {
      let skills = getChosenSkills();
      console.log(skills);
      return $http({
        url: API_URL,
        method: 'GET',
        params: {skills: skills}
      })
  }

  let getNextCandidate = () => {

    let candidate = candidates[nextID];
    nextID++;
    return $q.when(candidate);

  }

  let getCandidate = () => {
    if (candidates.length > 0){
      return getNextCandidate();


    }else{
    return getAllCandidates()
      .then(saveCandidates)
      .then(getNextCandidate)
      }
  }

  return {getCandidate};
};

candidateService.inject = ['$http', '$q', 'localStorageService'];

export {candidateService};