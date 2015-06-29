invenApp.controller('AuthCtrl', ['$scope', '$location', 'AuthFactory', "$firebaseArray", function($scope, $location, AuthFactory, $firebaseArray){

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
        }
      });
    //   AuthFactory.login($scope.user.email, $scope.user.password, function() {
    //     $location.path('/reorder_list');
    //     $scope.$apply();
    //   });
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
              $scope.apply();
            }
          });
        }
      });
    };
    //   AuthFactory.register($scope.user.email, $scope.user.password, function() {
    //     AuthFactory.login($scope.user.email, $scope.user.password, function() {
    //       $location.path('/login');
    //       $scope.$apply();
    //     });
    //     // create user profile in database
    //     var ref = new Firebase("https://invenapp.firebaseio.com/users");
    //     $scope.users = $firebaseArray(ref);
    //     $scope.users.$add({
    //       firstname: $scope.user.firstname,
    //       lastname: $scope.user.lastname,
    //       email: $scope.user.email
    //     });
    //   });
    // };

  }]);
