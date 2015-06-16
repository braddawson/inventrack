var invenApp = angular.module('invenApp', ['ngRoute', 'firebase'])

invenApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .when("/batch_builder", {templateUrl: "partials/batch_builder.html", controller: "BatchBuilderCtrl"})
    .when('/cooking_forecast', {templateUrl:'partials/cooking_forecast.html', controller:'CookingForecastCtrl'})
    .when('/cooking_inventory', {templateUrl:'partials/cooking_inventory.html', controller:'CookingInventoryCtrl'})
    .when('/kitchen_inventory', {templateUrl:'partials/kitchen_inventory.html', controller:'KitchenInventoryCtrl'})
    .when('/packaging_forecast', {templateUrl:'partials/packaging_forecast.html', controller:'PackagingForecastCtrl'})
    .when('/packaging_inventory', {templateUrl:'partials/packaging_inventory.html', controller:'PackagingInventoryCtrl'})
    .when('/phone_log', {templateUrl:'partials/phone_log.html', controller:'PhoneLogCtrl'})
    .when('/reorder_list', {templateUrl:'partials/reorder_list.html', controller:'ReorderListCtrl'})
    .when('/time_clock', {templateUrl:'partials/time_clock.html', controller:'TimeClockCtrl'})
    .when('/vendor_receiving', {templateUrl:'partials/vendor_receiving.html', controller:'VendorReceivingCtrl'})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "ErrCtrl"});
}]);
