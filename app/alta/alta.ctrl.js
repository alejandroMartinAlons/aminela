
function AltaCtrl ($filter,AltaSrv,$state){
    var vm = this;
    vm.email="";
    vm.password="";
    vm.passwordRepeat="";
    vm.errorMsg ="";

    vm.altaAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email)) || ($filter('PassFilterRepeat')(vm.password, vm.passwordRepeat));
        var service = new AltaSrv();
        
        if (!disable) {
            service.doAlta(vm.email, vm.password, vm.passwordRepeat).then(function(data){
               console.log('Alta con exito'); 
               $state.go('login', {result:"Se creado el usuario correctamente"});
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
        vm.passwordRepeat="";
        vm.errorMsg ="";
    };
}

module.exports = angular.module('alta').controller('AltaCtrl',['$filter','AltaSrv','$state', AltaCtrl]);

