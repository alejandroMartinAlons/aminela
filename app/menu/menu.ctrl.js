
function MenuCtrl (MenuSrv){
    var vm = this;
    vm.errorMsg ="";

    vm.altaAction = function () {
        var service = new MenuSrv();
        
     
            service.doMenu().then(function(data){
            	vm.menuSrv=data;
               console.log('Menu con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        
    };


}

module.exports = angular.module('menu').controller('MenuCtrl',['MenuSrv', MenuCtrl]);

