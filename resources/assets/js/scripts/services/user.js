(function(){
'use strict';

  angular.module('timeTracker').service('user', ['$resource', function($resource) {

    return $resource('api/users/:id');

    /*
    var User = $resource('api/users/');


    this.getUser = function() {
      return User.query().$promise.then(function(results) {
        return results;
      }, function(error) {
        console.log(error);
      });
    }
    */


  }]);

})();
