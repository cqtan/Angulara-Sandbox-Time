(function() {

  'use strict';

  angular.module('timeTracker').service('time', ['$resource', function($resource) {

    // ngResource call to our static data
    //var Time = $resource('data/time.json');

    // ngResource call to the API with id as a paramaterized URL
    // and setup for the update method
    // 1st parameter = id, 2nd = default values
    var Time = $resource('api/time/:id', {}, {
      update: {
        method: 'PUT'
      }
    });

    this.getTime = function() {
      return Time.query().$promise.then(function(results) {
        angular.forEach(results, function(result) {

          // Add the loggedTime property which calls
          // getTimeDiff to give us a duration object
          //result.loggedTime = getTimeDiff(result.start_time, result.end_time);
        });
        return results;
      }, function(error) { // Check for errors
        console.log(error);
      });
    }
    
  }]);
})();
