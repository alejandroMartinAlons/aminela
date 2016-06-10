function altaSrvFactory ($http,$q,config,ErrorManager){

    function altaClass () {

        this.doAlta = function (email, psswd,passwordRepeat) {
            var defer = $q.defer();
            var serviceConfig = config.backService.altaConf;
            
            serviceConfig.data={
                email:email,
                password:psswd,
                passwordRepeat: passwordRepeat
            };

            $http(serviceConfig).then(function (result) {
                defer.resolve(result.data);
            }, function (error) {
                var service = new ErrorManager();
                defer.reject(service.getCustomError(error));
            });

            return defer.promise;
        }
    }
    return altaClass;
}

module.exports=angular.module('alta').factory('AltaSrv',['$http','$q','config','ErrorManager',altaSrvFactory]);