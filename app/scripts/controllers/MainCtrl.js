 (function() {
     function MainCtrl(Room, Message, $uibModal) {
        this.heroTitle = "Chat your Bloc off!";
        this.roomList = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.selectRoom = function(room) {
            this.messages = Message.getByRoomId(room.$id);
            this.currentRoom = room;
        };
        this.addRoom = function() {
            $uibModal.open({
				templateUrl: '/templates/addRoom.html',
				controller: 'AddRoomCtrl',
				size: 'md',
			});
        };
     };
    
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
 })();