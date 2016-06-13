function AccionesFactory (){
    
    function AccionesClass(){
        this.printMsg = function (msg){
            alert (msg);
        }
    }
    
    return new AccionesClass();
}

module.exports=angular.module('menu').factory('AccionSrv',AccionesFactory);