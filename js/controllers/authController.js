invenApp.controller('AuthCtrl', ['$scope', '$location', 'AuthFactory', "$firebaseArray", "$window", function($scope, $location, AuthFactory, $firebaseArray, $window){

    var ref = new Firebase("https://invenapp.firebaseio.com");

    $scope.login = function() {
      ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $location.path('/reorder_list');
          $scope.$apply();
          $window.location.reload();
        }
      });
     };

    $scope.register = function() {
      var ref = new Firebase("https://invenapp.firebaseio.com");
      ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          ref.authWithPassword({
            email    : $scope.user.email,
            password : $scope.user.password
          }, function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
              $location.path('/reorder_list');
              $scope.$apply();
              $window.location.reload();
            }
          });
        }
      });
    };
  }]);
