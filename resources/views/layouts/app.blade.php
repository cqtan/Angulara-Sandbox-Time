<!DOCTYPE html>
<html lang="en" ng-app="timeTracker">
  @include('includes.header')
  <body>
    <div id="app">
      @include('includes.nav')
      @yield('content')
    </div>
    @include('includes.footer')
  </body>
</html>
