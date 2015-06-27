let localStorageService = ($window) => {

  return {
    add(key, val){
      return $window.localStorage.setItem(key, val);
    },
    remove(key){
      return $window.localStorage.removeItem(key);
    },
    get(key){
      let getItem = $window.localStorage.getItem(key);

      if (getItem){
        return JSON.parse(getItem);
      }
    }
  };

};

localStorageService.inject = ['$window'];

export {localStorageService};