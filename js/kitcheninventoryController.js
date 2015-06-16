invenApp.controller('KitchenInventoryCtrl', function($scope, $firebaseArray) {
    $scope.title = "Kitchen Inventory";

  var ref = new Firebase("https://invenapp.firebaseio.com/kitchenInventory");

  // create a synchronized array
  $scope.kitchenInventory = $firebaseArray(ref);

  // add new items to the array
  $scope.addItem = function() {
    $scope.kitchenInventory.$add({
      item: $scope.newKitchenInventoryItem,
      amount: 0
    });

  };
});
