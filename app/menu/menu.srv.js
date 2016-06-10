function menuSrvFactory ($http,$q,config,ErrorManager){

    function menuClass () {

        this.doMenu = function () {
            var defer = $q.defer();
            var serviceConfig = config.backService.menuConf;

            $http(serviceConfig).then(function (result) {
                defer.resolve(result);
            }, function (error) {
                var service = new ErrorManager();
                defer.reject(service.getCustomError(error));
            });

            return defer.promise;
        }
    }
    return menuClass;
}

module.exports=angular.module('menu').factory('MenuSrv',['$http','$q','config','ErrorManager',menuSrvFactory]);