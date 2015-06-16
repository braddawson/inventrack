invenApp.controller('PackagingInventoryCtrl', function ($scope, $firebaseArray) {
  $scope.title = "Packaging Inventory";

  var ref = new Firebase("https://invenapp.firebaseio.com/packagingInventory");

  // create a synchronized array
  $scope.packagingInventory = $firebaseArray(ref);

  // add new items to the array
  $scope.addItem = function() {
    $scope.packagingInventory.$add({
      item: $scope.newPackagingInventoryItem
    });
  };
});
