function directivaMenu($injector) {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            menu: '='
        },
        template: require('./menuDrctv.template.html'),
        controllerAs: 'menuDrctv',
        controller: function () {
            var vm = this;

            vm.doAction = function (action) {
                var service = $injector.get(action.servicio);
                service[action.metodo].apply(service,action.parameters);
            };
        }
    }
}


module.exports = angular.module('menu').directive('myMenu', ['$injector', directivaMenu]);