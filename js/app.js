var invenApp = angular.module('invenApp', ['ngRoute', 'firebase']);

invenApp.factory("AuthFactory", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://invenapp.firebaseio.com/");
  return $firebaseAuth(ref);
}]);

//auth is used in controller in navbar
invenApp.controller("NavCtrl", ["$scope", "AuthFactory", "$location", "$window", function($scope, AuthFactory, $location, $window) {
  $scope.auth = AuthFactory;
  $scope.user = $scope.auth.$getAuth();

  $scope.logout = function() {
    $scope.auth.$unauth();
    $location.path('login');
    $window.location.reload();
  }
}])

//redirects to homepage if $requireAuth rejects
invenApp.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

invenApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
     controller: "AuthCtrl",
      templateUrl: "partials/login.html"
   })
    .when('/login', {
      controller: 'AuthCtrl',
      templateUrl: 'partials/login.html'
   })
    .when('/register', {
      controller: 'AuthCtrl',
      templateUrl: 'partials/register.html'
   })
    .when('/kitchen_inventory', {
        controller:'KitchenInventoryCtrl',
        templateUrl:'partials/kitchen_inventory.html',
        resolve: {
        "currentAuth": ["AuthFactory", function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .when('/packaging_inventory', {
      controller:'PackagingInventoryCtrl',
      templateUrl:'partials/packaging_inventory.html',
      resolve: {
        "currentAuth": ["AuthFactory", function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .when('/reorder_list', {
      controller:'ReorderListCtrl',
      templateUrl:'partials/reorder_list.html',
      resolve: {
        "currentAuth": ["AuthFactory", function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .otherwise("/404", {
      controller: "ErrCtrl",
      templateUrl: "partials/404.html"
    });
}]);



invenApp.constant('FB_URL', 'https://invenapp.firebaseio.com');
