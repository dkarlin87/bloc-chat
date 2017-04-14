//
//(function() {
//    function BlocChatCookies($cookies, $uibModal) {
//        var currentUser = $cookies.get('blocChatCurrentUser');
//        if (!currentUser || currentUser === '') {
//            $uibModal.open({
//                
//                templateUrl: '/templates/main.html',
//                controller: 'ModalCtrl as modal',
//                
//            });
//        }
//    }
//    
//    angular
//        .module('blocChat')
//        .run(['$cookies', '$uibModal', BlocChatCookies]);
//})();