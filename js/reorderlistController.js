invenApp.controller('ReorderListCtrl', function($scope, $firebaseArray) {
  $scope.title = "Reorder List";

  var ref = new Firebase("https://invenapp.firebaseio.com/inventory");

  // create a synchronized array
  $scope.inventory = $firebaseArray(ref);


});
