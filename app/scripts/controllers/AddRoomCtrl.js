 (function() {
     function AddRoomCtrl(Room, $uibModalInstance, $scope) {
        $scope.roomName = '';
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.ok = function() {
            Room.add($scope.roomName);
            $uibModalInstance.close($scope.roomName);
        };
     };
     
     angular
         .module('blocChat')
         .controller('AddRoomCtrl', ['Room','$uibModalInstance', '$scope', AddRoomCtrl]);
 })();