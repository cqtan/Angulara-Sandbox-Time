@extends('layouts.app')

@section('content')
<div class="container">

  <!-- Row -->
  <div class="row">
    <!-- Create Time Entry Panel -->
    <div class="col-md-8">
      <div class="panel panel-default">
        <div class="panel-heading">Create Time Entry</div>
        <div class="panel-body">
          <div class="my_timepickers">
            <div class="timepicker col-md-4">
              <span class="timepicker-title label label-primary">Clock In</span>
              <div uib-timepicker ng-model="clockIn" hour-step="1" minute-step="1" show-meridian="true"></div>
            </div>
            <div class="timepicker col-md-4">
              <span class="timepicker-title label label-primary">Clock Out</span>
              <div uib-timepicker ng-model="clockOut" hour-step="1" minute-step="1" show-meridian="true"></div>
            </div>
          </div>
          <div class="time-entry-comment">
            <form>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" ng-model="title" placeholder="Name of your activity">
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" ng-model="description" rows="5" id="description" placeholder="Enter a description for your activity"></textarea>
              </div>
              <button class="btn btn-primary" ng-click="vm.logNewTime()">Log Time</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END Create Time Entry Panel -->

    <!-- Placholder Panel -->
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">Placholder Heading</div>
        <div class="panel-body">
          <p>Placeholder Content <% 1+1 %></p>
        </div>
      </div>
    </div>
    <!-- END Placholder Panel-->
  </div>
  <!-- END Row-->

    <!-- Row -->
    <div class="row" ng-repeat="time in timeentries">
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-heading"><% time.title %> | by <% time.user.name %></div>
          <div class="panel-body">
            <p>Start time: <% time.startTime %></p>
            <p>Start time: <% time.endTime %></p>
            <br>
            <p><% time.description %></p>
          </div>
        </div>
      </div>
    </div>
    <!-- END Row-->

</div>

@endsection
