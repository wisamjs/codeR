let candidateServiceModule = angular.module('candidate-service', [])
  .factory('candidateService', ($http, $q, localStorageService, R, Dispatcher) => {
    const API_URL = 'http://localhost:3000/api/people';
    let candidates = [];
    let usedIDs = [];
    let nextID = 0;
    let skills = [];


    let clearUsed = () => {
      usedIDs.length = 0;
    };

    let getCachedSkills = () => {
      skills = localStorageService.get('project').labels;
      return skills;

    };

    let saveCandidates = (res) => {
      clearUsed();
      candidates = res.data;
      return res;

    };

    let getAllCandidates = () => {
        let cachedSkills = getCachedSkills();
        return $http({
          url: API_URL,
          method: 'GET',
          params: {skills: cachedSkills}
        });
    };

    let getNextCandidate = () => {

      let candidate = candidates[nextID];
      nextID++;
      return $q.when(candidate);

    };

    let newCandidates = () => {
      return candidates.length === 0;

    };

    let equalArrs = (arr1, arr2) => {
      let sortedArr1 = arr1.sort();
      let sortedArr2 = arr2.sort();

      return R.equals(sortedArr1, sortedArr2);
    };

    let newSkills = () => {
      let cachedSkills = getCachedSkills();
      return skills.length === 0 || equalArrs(skills, cachedSkills);

    };


    let getCandidate = () => {

      if ( newCandidates() || newSkills() ){
        return getAllCandidates()
        .then(saveCandidates)
        .then(getNextCandidate);
        } else {
        return getNextCandidate();
      }
    };

    return {getCandidate};
  });


export {candidateServiceModule};