<!DOCTYPE html>
<html ng-app="timeTracker">
  @include('includes.head')
  <body ng-controller="TimeEntryCtrl">
    <div id="app">
      @include('includes.nav')
      @yield('content')
    </div>
    @include('includes.footer')
  </body>
</html>
