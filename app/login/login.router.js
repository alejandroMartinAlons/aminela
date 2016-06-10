function getStates() {
    return [{
        state:'login',
        config:{
            template: require('./login.template.html'),
<<<<<<< HEAD
            url: '/login',
            controller: 'LoginCtrl',
            controllerAs: 'login'
=======
            url:'/login/:result',
            controller: 'LoginCtrl',
            controllerAs:"login",
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
        }
    }];
}

function loginRun (routerHelper) {
    routerHelper.configureStates(getStates(),'login/');
}

module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);