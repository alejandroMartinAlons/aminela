require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('./routerHelperProvider');
require('./home/home.router');
require('./home/home.ctrl');
require('./common/config.srv');
require('./common/errorManger.srv');
require('./login/login.router');
require('./login/login.ctrl');
require('./alta/alta.router');
require('./alta/alta.ctrl');
require('./alta/alta.srv');
require('./login/login.fltr');
require('./login/pass.fltr');
require('./login/login.srv');
require('./alta/passRepeat.fltr');
require('./menu/menu.router');
require('./menu/menu.srv');
require('./menu/acciones.srv');
require('./menu/menu.ctrl');
require('./menu/menu.drctv');
require('./dashboard/dashboard.router');

var app = require('./app');

angular.element(document).ready(function () {
    angular.bootstrap(document,[app.name])
});