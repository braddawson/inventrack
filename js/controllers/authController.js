invenApp.controller('AuthCtrl', ['$scope', '$location', 'AuthFactory', "$firebaseArray", function($scope, $location, AuthFactory, $firebaseArray){

    $scope.login = function() {
      AuthFactory.login($scope.user.email, $scope.user.password, function() {
        $location.path('/reorder_list');
        $scope.$apply();
      });
    };

    $scope.register = function() {
      AuthFactory.register($scope.user.email, $scope.user.password, function() {
        AuthFactory.login($scope.user.email, $scope.user.password, function() {
          $location.path('/reorder_list');
          $scope.$apply();
        });
        // create user profile in database
        var ref = new Firebase("https://invenapp.firebaseio.com/users");
        $scope.users = $firebaseArray(ref);
        $scope.users.$add({
          firstname: $scope.user.firstname,
          lastname: $scope.user.lastname,
          email: $scope.user.email
        });
      });
    };

    $scope.logout=function(){
      AuthFactory.logout(function() {
        $location.path('/login');
        $scope.$apply();
      });
    };
  }]);
