invenApp.controller("RegisterCtrl", ["$scope", "AuthFactory", "$firebaseArray", "$location",
  function($scope, AuthFactory, $firebaseArray, $location) {



    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      AuthFactory.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      }).then(function(user) {
        // create user profile in database
        var ref = new Firebase("https://invenapp.firebaseio.com/users");
        $scope.users = $firebaseArray(ref);
        $scope.users.$add({
          firstname: $scope.firstname,
          lastname: $scope.lastname,
          email: $scope.email
        });
      })
      .then(function(/* user */) {
            // redirect to the account page
            $location.path('/reorder_list');
          }, function(err) {
            $scope.err = errMessage(err);
          })
    };
  }
]);
