invenApp.controller('CookingForecastCtrl', function ($scope, $firebaseObject) {
  console.log("Cooking Forecast Controller.");
  $scope.title = 'Cooking Forecast';

  var ref = new Firebase("https://invenapp.firebaseio.com/cookingforecast");

  // create a synchronized array
  $scope.cookingforecast = $firebaseObject(ref);

});
