function getStates() {
    return [{
        state:'alta',
        config:{
            template: require('./alta.template.html'),
            url:'/alta',
            controller: 'AltaCtrl',
            controllerAs:"alta"

        }
    }];
}



function altaRun (routerHelper) {
    routerHelper.configureStates(getStates());
}


module.exports=angular.module('alta',[]).run(['routerHelper', altaRun]);

