function getStates() {
    return [{
        state:'menu.dashboard',
        config:{
            template: require('./dashboard.template.html'),
            url:'/dashboard'
        }
    }];
}



function DashboardRun (routerHelper) {
    routerHelper.configureStates(getStates());
}



module.exports=angular.module('dashboard',[]).run(['routerHelper',DashboardRun]);