<!doctype html>
<html ng-app="ui.bootstrap.demo">
  <head>
    <title>Time Tracker</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/app.css" media="screen" title="no title">

    <style>
      .full button span {
        background-color: limegreen;
        border-radius: 32px;
        color: black;
      }
      .partially button span {
        background-color: orange;
        border-radius: 32px;
        color: black;
      }
    </style>
  </head>

  <body>
    <br>
    <p>Click me to test JQuery</p>
    <br>
    <p>If the following evaluates to "2" then Angular works too: {{ 1 + 1 }}</p>
    <br>
    <h2>A Datepicker to see if Angular-UI-Boostrap works:</h2>
    <div ng-controller="DatepickerDemoCtrl">
      <pre>Selected date is: <em>{{dt | date:'fullDate' }}</em></pre>

      <h4>Inline</h4>
      <div style="display:inline-block; min-height:290px;">
        <div uib-datepicker ng-model="dt" class="well well-sm" datepicker-options="options"></div>
      </div>

      <hr />
      <button type="button" class="btn btn-sm btn-info" ng-click="today()">Today</button>
      <button type="button" class="btn btn-sm btn-default" ng-click="setDate(2009, 7, 24)">2009-08-24</button>
      <button type="button" class="btn btn-sm btn-danger" ng-click="clear()">Clear</button>
      <button type="button" class="btn btn-sm btn-default" ng-click="toggleMin()" uib-tooltip="After today restriction">Min date</button>
    </div>

  </body>

  <!-- Application Dependencies -->
  <script type="text/javascript" src="js/app.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {
      $("p").click(function() {
        alert("It worked!");
      });
    });
  </script>
  
  <script type="text/javascript" src="js/angular.js"></script>


</html>
