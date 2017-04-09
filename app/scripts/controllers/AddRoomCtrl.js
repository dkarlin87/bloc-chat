 (function() {
     function AddRoomCtrl(Room, $uibModalInstance) {
         
     };
    
     	this.addRoom = function() {
			var modal_instance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.newRoom = {name: ''};
					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close($scope.newRoom);
					};
				},
				size: 'md',
			});
			
			modal_instance.result.then(function(data) {
				vm.roomService.addRoom(data);
			});
     
     angular
         .module('blocChat')
         .controller('AddRoomCtrl', 'AddRoom' ['Room','$uibModalInstance', AddRoomCtrl]);
 })();