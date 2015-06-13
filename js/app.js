var app = angular.module('invenApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .when("/batch_builder", {templateUrl: "partials/batch_builder.html", controller: "ConditionsCtrl"})
    .when('/cooking_forecast', {templateUrl:'partials/cooking_forecast.html', controller:'WebcamsCtrl'})
    .when('/kitchen_inventory', {templateUrl:'partials/kitchen_inventory.html', controller:'TendayCtrl'})
    .when('/packaging_forecast', {templateUrl:'partials/packaging_forecast.html', controller:'TendayCtrl'})
    .when('/packaging_inventory', {templateUrl:'partials/packaging_inventory.html', controller:'TendayCtrl'})
    .when('/phone_log', {templateUrl:'partials/phone_log.html', controller:'TendayCtrl'})
    .when('/reorder_list', {templateUrl:'partials/reorder_list.html', controller:'TendayCtrl'})
    .when('/time_clock', {templateUrl:'partials/time_clock.html', controller:'TendayCtrl'})
    .when('/vendor_receiving', {templateUrl:'partials/vendor_receiving.html', controller:'TendayCtrl'})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "ErrCtrl"});
}]);
