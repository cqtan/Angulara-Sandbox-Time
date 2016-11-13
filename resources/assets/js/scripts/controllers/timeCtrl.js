(function() {

  'use strict';

  angular.module('timeTracker').controller('TimeEntryCtrl', TimeEntry)
         .$inject=['$scope', '$resource'];

  function TimeEntry($scope, time, user) {

    // vm is our capture variable
    // var vm = this;

    $scope.timeentries = []; // Array
    $scope.totalTime = {}; // Object

    // Initialize the clockIn and clockOut times to the current time.
    $scope.clockIn = new Date();
    $scope.clockOut = new Date();

    $scope.userId = $('#userIdElement').data('userId');
    console.log("hi");
    //user.setUserName(username);


    // Grab all the time entries saved in the database
    getTimeEntries();
    //getUser();

    //User.getUser();


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

    function getUser() {
      user.getUsers().then(function(result) {
        $scope.users = result;
      }, function(error) {
        console.log(error);
      });
    }

    // Submit the time entry that will be called
    // when we click the "Log Time" button
    function logNewTime() {
      // Make sure that the clock-in time isn't after
      // the clock-out time!
      if($scope.clockOut < $scope.clockIn) {
        alert("You can't clock out before you clock in!");
        return;
      }

      // Make sure the time entry is greater than zero
      if($scope.clockOut - $scope.clockIn === 0) {
        alert("Your time entry has to be greater than zero!");
        return;
      }

      var filteredClockIn = $scope.clockIn;
      console.log(filteredClockIn);

      // Call to the saveTime method on the time service
      // to save the new time entry to the database
      time.saveTime({
        "user_id":$scope.timeEntryUser.id,
        "title":$scope.title,
        "start_time":$scope.clockIn,
        "end_time":$scope.clockOut,
        "description":$scope.description
      }).then(function(success) {
        getTimeEntries();
        console.log(success);
      }, function(error) {
        console.log(error);
      });

      getTimeEntries();

      // Reset clockIn and clockOut times to the current time
      $scope.clockIn = moment();
      $scope.clockOut = moment();

      // Clear the comment field
      $scope.comment = "";

      // Deselect the user
      $scope.timeEntryUser = "";
    }

  }

})();
