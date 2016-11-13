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

    this.saveTime = function(data) {
      // Format the date-time so that MySQL can use it.
      // Because moment's timepicker includes "T" and "Z"
      var start = moment(data.start_time).format("YYYY-MM-DD HH:mm:ss");
      data.start_time = start;
      var end = moment(data.end_time).format("YYYY-MM-DD HH:mm:ss");
      data.end_time = end;

      // do a POST request with data. Handled by Laravel "TimeEntriesController"
      return Time.save(data).$promise.then(function(success) {
        console.log(success);
      }, function(error) {
        console.log(error);
      });
    }

  }]);
})();
