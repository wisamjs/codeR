let candidateService = ($http) => {
  const API_URL = 'http://localhost:3000/';
  let usedIDs = [];

  let isUsed = (num) => {
    return usedIDs.indexOf(num) !== -1;
  };

  let allUsed = () => {
    return usedIDs.length === 30;
  };

  let clearUsed = () => {
    usedIDs.length = 0;
  };

  let getRandomID = () => {
    let num = Math.floor(Math.random() * 30);

    if (!isUsed(num) && !allUsed()) {
      usedIDs.push(num);
      console.log(usedIDs);
      return num;
    } else if (!allUsed()) {
      return getRandomID();
    } else {
      clearUsed();
      return getRandomID();

    }

  };

  return {
    getCandidate() {
      let randomID = getRandomID();
      return $http.get(API_URL + randomID);
    }

  };
};

candidateService.inject = ['$http'];

export {candidateService};