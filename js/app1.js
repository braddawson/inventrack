var invenApp = angular.module('invenApp', ['ngRoute', 'firebase']);

//Generates the $firebaseAuth instance
invenAp.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://invenapp.firebaseio.com/");
  return $firebaseAuth(ref);
}]);

//auth is now used in controller
invenApp.controller("SampleCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}])

//redirects to homepage if $requireAuth rejects
invenApp.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

//use routeProvider to only load HomeCtrl if $waitForAuth Resolves and returns promise
invenApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/reorder_list", {
    controller: "HomeCtrl",
    templateUrl: "views/reorder_list.html",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$waitForAuth();
      }]
    }
  }).when("/kitchen_inventory", {
   //controller only loaded if $requireAuth resolves
    controller: "AccountCtrl",
    templateUrl: "views/kitchen_inventory.html",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireAuth();
      }]
    }
  });
}]);

//returns the authenticated user from currentAuth or null if not logged in
invenApp.controller("AuthCtrl", ["currentAuth", '$scope', '$location', 'Auth', "$firebaseArray", function(currentAuth, $scope, $location, Auth, $firebaseArray) {

}]);

invenApp.controller("ReorderListCtrl", ["currentAuth", "$scope", "$firebaseArray", function(currentAuth, $scope, $firebaseArray) {
  $scope.title = "Reorder List";

  var ref = new Firebase("https://invenapp.firebaseio.com/inventory");

  // create a synchronized array
  $scope.inventory = $firebaseArray(ref);

}]);


// invenApp.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when("/", {
//      controller: "AuthCtrl",
//       templateUrl: "partials/login.html"
//    })
//     .when('/login', {
//       controller: 'AuthCtrl',
//       templateUrl: 'partials/login.html'
//    })
//     .when('/register', {
//       controller: 'AuthCtrl',
//       templateUrl: 'partials/register.html'
//    })
//     .when('/kitchen_inventory', {
//       controller:'KitchenInventoryCtrl',
//       templateUrl:'partials/kitchen_inventory.html'
//     })
//     .when('/packaging_inventory', {
//       controller:'PackagingInventoryCtrl',
//       templateUrl:'partials/packaging_inventory.html'
//     })
//     .when('/reorder_list', {
//       controller:'ReorderListCtrl',
//       templateUrl:'partials/reorder_list.html'
//     })
//     .otherwise("/404", {
//       controller: "ErrCtrl",
//       templateUrl: "partials/404.html"
//     });
// }]);

// invenApp.constant('FB_URL', 'https://invenapp.firebaseio.com');
