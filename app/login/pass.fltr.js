function PassFilter (config) {
    return function (pass){
        return (config.validation.pass.test(pass))?
            false:
            config.msgError.invalidPass;
    };
}



module.exports=angular.module('login').filter('PassFilter',['config',PassFilter]);
