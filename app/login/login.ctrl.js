function LoginCtrl($filter,LoginSrv,$state, $stateParams) {

    //ZONA DE DICCIONARIO
    var vm = this;
    vm.errorMsg = null;

    vm.email = "";
    vm.password = "";
    vm.message= ($stateParams.result)?$stateParams.result:null;

    console.log('inicio login:'+ vm.message); 
    //FUNCIONES AUXILIARES

    //EVENTOS

    vm.loginAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email));
        var service = new LoginSrv();
        
        if (!disable) {
            service.doLogin(vm.email, vm.password).then(function(data){
               console.log('Login con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
                vm.message=null;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
    };
    
    vm.alta = function () {
        $state.go('alta');
    };
}

<<<<<<< HEAD
module.exports = angular.module('login').controller('LoginCtrl', ['$filter','LoginSrv','$state', LoginCtrl]);
=======
module.exports = angular.module('login').controller('LoginCtrl', ['$filter','LoginSrv','$state','$stateParams', LoginCtrl]);
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
