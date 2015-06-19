invenApp.controller('KitchenInventoryCtrl', function($scope, $firebaseArray) {
  $scope.title = "Kitchen Inventory";

  var ref = new Firebase("https://invenapp.firebaseio.com/inventory");

  // create a synchronized array
  $scope.kitchenInventory = $firebaseArray(ref);

  // add new items to the array
  $scope.addItem = function() {
    $scope.kitchenInventory.$add({
      item: $scope.newKitchenInventoryItem,
      amount: $scope.newKitchenInventoryItemAmount,
      timestamp: Firebase.ServerValue.TIMESTAMP,
      inventory: "kitchen",
      reorderPoint: 1
    });
    $scope.newKitchenInventoryItem = "";
    $scope.newKitchenInventoryItemAmount = "";
    $("#newKitchenInventoryItem").focus();
  };

  $scope.plusOne = function(item) {
    item.amount++;
    $scope.kitchenInventory.$save(item);
  };

  $scope.minusOne = function(item) {
    item.amount--;
    $scope.kitchenInventory.$save(item);
  };

});
