invenApp.factory("invenFactory", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the Firebase database where we will store our data
    var fbRef = new Firebase("https://invenapp.firebaseio.com/inventory");

    return $firebaseArray(fbRef);
  }
]);
