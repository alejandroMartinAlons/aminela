angular.module('menu').directive('myDirective',function(){
  return {
    restrict: 'A',
    scope:true,
    bindToController:{
      menu: '='
    },
    templateUrl: require('./menu.directiva.template.html'),
    controllerAs:'menuPadre',
    controller: function(){
      var vm = this;
      vm.menuObj = JSON.parse(vm.menu);
    }
  }
});
