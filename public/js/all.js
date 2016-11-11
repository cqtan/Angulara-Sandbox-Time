(function() {

  'use strict';

  angular.module('timeTracker', ['ngResource','ui.bootstrap'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
  });
})();

(function() {

  'use strict';

  angular.module('timeTracker').controller('TimeEntryCtrl', TimeEntry);

  function TimeEntry(time, $scope) {

    // vm is our capture variable
    // var vm = this;

    $scope.timeentries = []; // Array
    $scope.totalTime = {}; // Object
    $scope.users = [];

    // Initialize the clockIn and clockOut times to the current time.
    $scope.clockIn = new Date();
    $scope.clockOut = new Date();

    // Grab all the time entries saved in the database
    getTimeEntries();

    /*
    // Get the users from the database so we can select
    // who the time entry belongs to
    getUsers();

    function getUsers() {
      user.getUsers().then(function(result) {
        $scope.users = result;
      }, function(error) {
        console.log(error);
      });
    }
    */

    // Fetches the time entries and puts the results
    // on the vm.timeentries array
    function getTimeEntries() {
      time.getTime().then(function(results) {
        $scope.timeentries = results;
          //updateTotalTime($scope.timeentries);
        }, function(error) {
          console.log(error);
        });
    }

  }

})();

(function() {

  'use strict';

  angular.module('timeTracker').service('time', function($resource) {

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
  });
})();

//# sourceMappingURL=all.js.map
