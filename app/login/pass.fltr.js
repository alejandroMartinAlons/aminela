function PassFilter (config) {
    return function (pass){
        return (config.validation.pass.test(pass))?
            false:
            config.msgError.invalidPass;
    };
}

function PassFilter2 (config) {
    return function(pass1,pass2){
        return(pass1===pass2)?
            false:
            config.msgError.invalidPassEqual;
    };
}


module.exports=angular.module('login').filter('PassFilter',['config',PassFilter]);
module.exports=angular.module('login').filter('PassFilter2',['config',PassFilter2]);