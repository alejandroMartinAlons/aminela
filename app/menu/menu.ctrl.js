
function menuCtrl (MenuDscr){
    var vm = this;
    vm.menuList = null;
    
    function startup(){
        var service = new MenuDscr();
        
        service.getMenuDesc().then(function(result){
            vm.menuList = result.data;
        }, function (error) {
            console.log(error.usuario.msg);
        });
    }
    
    startup();
}

module.exports=angular.module('menu').controller('MenuCtrl',['MenuDscr',menuCtrl]);
