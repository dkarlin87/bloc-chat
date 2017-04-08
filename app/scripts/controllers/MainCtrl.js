 (function() {
     function MainCtrl(Room) {
        this.heroTitle = "Chat your Bloc off!";
        this.roomList = Room.all;

     };
    
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', MainCtrl]);
 })();