invenApp.controller('PackagingInventoryCtrl', function($scope, $firebaseArray) {
  $scope.title = "Packaging Inventory";

  var ref = new Firebase("https://invenapp.firebaseio.com/inventory");

  // create a synchronized array
  $scope.packagingInventory = $firebaseArray(ref);

  // add new items to the array
  $scope.addItem = function() {
    $scope.packagingInventory.$add({
      item: $scope.newPackagingInventoryItem,
      amount: $scope.newPackagingInventoryItemAmount,
      timestamp: Firebase.ServerValue.TIMESTAMP,
      inventory: "packaging",
      reorderPoint: 1,
      reorderPoint: $scope.newPackagingInventoryItemReorderPoint
    });
    $scope.newPackagingInventoryItem = "";
    $scope.newPackagingInventoryItemAmount = "";
    $scope.newPackagingInventoryItemReorderPoint = "";
    $("#newPackagingInventoryItem").focus();
  };

  $scope.plusOne = function(item) {
    item.amount++;
    $scope.packagingInventory.$save(item);
  };

  $scope.minusOne = function(item) {
    item.amount--;
    $scope.packagingInventory.$save(item);
  };

});
