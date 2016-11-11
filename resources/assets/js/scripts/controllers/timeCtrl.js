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
