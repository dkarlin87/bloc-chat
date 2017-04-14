(function() {
    
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return { 
      getByRoomId: function(roomId) {
        console.log($firebaseArray(ref.orderByChild('roomId').equalTo(roomId)));
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();