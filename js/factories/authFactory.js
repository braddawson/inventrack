invenApp.factory("AuthFactory", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://invenapp.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);
