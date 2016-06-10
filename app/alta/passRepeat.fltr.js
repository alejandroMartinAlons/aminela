function PassFilterRepeat (config) {
    return function(pass1,pass2){
        return(pass1===pass2)?
            false:
            config.msgError.invalidPassEqual;
    };
}
module.exports=angular.module('alta').filter('PassFilterRepeat',['config',PassFilterRepeat]);