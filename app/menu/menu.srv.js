
function factoryMenuJson ($http, $q, config, ErrorManager){

    function MenuJsonClass (){
        this.getMenuDesc = function(){
            var configServ = config.backService.menuServ;
            var defer = $q.defer();


            $http(configServ).then(function (result) {
               defer.resolve(result) 
            }, function (error) {
                var service = new ErrorManager();
                defer.reject(service.getCustomError(error));
            });
            
            return defer.promise;
        }
    }
    
    return MenuJsonClass;
}

module.exports=angular.module('menu').factory('MenuDscr',['$http','$q','config','ErrorManager',factoryMenuJson]);
