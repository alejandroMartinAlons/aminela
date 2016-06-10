<<<<<<< HEAD


describe('Test del modulo alta', function () {
	
   beforeEach(window.module('app'));
    
    describe('Tests del filtro de email', function () {
        var EmailFilter, config;
        
        beforeEach(inject(function (EmailFilterFilter, _config_) {
            EmailFilter = EmailFilterFilter;
            config = _config_;
        }));
        
        it('Test OK: El mail del filtro esta bien formado', function () {
            var mail = 'pepe@mail.com';
            
            expect(EmailFilter(mail)).toBe(false);
        });
        
        it('Test KO: El mail del filtro esta mal formado', function () {
            var mail = 'pepe.com';
            
            expect(EmailFilter(mail)).toBe(config.msgError.invalidMail);
        });
    });
    
    describe('Tests del filtro de pass', function () {
    	var PassFilter, Pass2Filter, config;

    	beforeEach(inject(function (PassFilterFilter, Pass2FilterFilter, _config_) {
            PassFilter = PassFilterFilter;
            Pass2Filter = Pass2FilterFilter;
            config = _config_;
    	}));

        it('Test OK: El pass del filtro esta bien formado', function () {
            var pass = '1234aa##';

            expect(PassFilter(pass)).toBe(false);
        });

    	it('Test OK: Los pass del filtro estan bien formados y coinciden', function () {
            var pass = '1234aa##';
            var pass2 = '1234aa##';
            
            expect(Pass2Filter(pass, pass2)).toBe(false);
    	});

        it('Test KO: Los pass del filtro estan bien formados pero son distintos', function () {
            var pass = '1234aa##';
            var pass2 = '1235aa##';

            expect(Pass2Filter(pass, pass2)).toBe(config.msgError.differentPasswords);
        });

        it('Test KO: Los pass del filtro estan bien formados pero son distintos', function () {
            var pass = '1234aa##';
            var pass2 = '';

            expect(Pass2Filter(pass, pass2)).toBe(config.msgError.invalidPass);
        });

    	it('Test KO: El pass del filtro esta mal formado', function () {
            var pass = 'a';
            var pass2 = '';
            
    	expect(Pass2Filter(pass, pass2)).toBe(config.msgError.invalidPass);
    	});
    });

    describe('Test del servicio de alta',function () {
        var $httpBackend, AltaSrv, config;

        beforeEach(inject(function (_$httpBackend_, _AltaSrv_, _config_) {
            $httpBackend = _$httpBackend_;
            AltaSrv = _AltaSrv_;
            config = _config_;
        }));

        it('Test OK: Probemos que obtenemos los datos correctos si el alta es un exito', function () {
           var altaData ={
               email:'pepe@email.com',
               password:'12345',
               password2:'12345'
=======
describe('Test del modulo alta', function () {
   beforeEach(window.module('app'));
    
      describe('Test del servicio de alta',function () {
        var $httpBackend, AltaSrv, config;

        beforeEach(inject(function (_$httpBackend_, _AltaSrv_, _config_) {
            $httpBackend = _$httpBackend_;
            AltaSrv = _AltaSrv_;
            config = _config_;
        }));

        describe('Tests del filtro de passRepeat',function () {
        	var PassFilterRepeat, config;

        	beforeEach(inject(function (PassFilterRepeatFilter, _config_) {
        		PassFilterRepeat = PassFilterRepeatFilter;
        	config = _config_;
        	}));

        	it('Test OK: El pass del filtro esta bien formado',function () {
        	var pass = '1234aa##';
        	var pass2 = '1234aa##';

        	expect(PassFilterRepeat(pass,pass2)).toBe(false);
        	});

        	it('Test KO: El pass del filtro esta mal formado', function () {
        	var pass = 'aaa';
        	var pass2 = 'bbb';

        	expect(PassFilterRepeat(pass,pass2)).toBe(config.msgError.invalidPassEqual);
        	});

        });

        it('Test OK: Probemos que obtenemos los datos correctos si el alta es un exito',function () {
           var altaData ={
               email:'pepe@email.com',
               password:'12345',
               passwordRepeat:'12345'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
           };

            var servConfig = config.backService.altaConf;
            var service = new AltaSrv();
                
            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [200,{data:'OK'},{}];
            });
<<<<<<< HEAD
            
            service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
=======

            service.doAlta(altaData.email, altaData.password,altaData.passwordRepeat).then(function (result) {
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                expect(result.data).toBe('OK');
            }, function (error) {
                expect(false).toBe(true);
            });
            
            $httpBackend.flush();
        });
        
<<<<<<< HEAD
        it ('Test KO: Probar error en caso de 404', function () {
            var altaData = {
                email:'pepe@email.com',
                password:'12345'
            };
            
            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();
            
            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [404,{},{}];
            });
            
            service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['404']);
            });
        });
        
        it ('Test KO: Probar error en caso de 401', function () {
            var altaData = {
                email: 'pepe@email.com',
                password: '12345',
                password2: '12345'
            };
            
            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();
            
            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [401,{},{}];
            });
            
            service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
=======
        it ('Test KO: Probar error en caso de 404',function () {
                var altaData ={
                    email:'pepe@email.com',
                    password:'12345',
                    passwordRepeat:'12345'
                };

                var servConfig = config.backService.altaConf;
                var errorConfig = config.serviceError;
                var service = new AltaSrv();
                
                $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                    return [404,{},{}];
                });
                
                service.doAlta(altaData.email, altaData.password, altaData.passwordRepeat).then(function (result) {
                   expect(false).toBe(true); 
                }, function (error) {
                    expect(error.usuario.msg).toBe(errorConfig['404']);
                });
        });

        it ('Test KO: Probar error en caso de 401',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345',
                passwordRepeat:'12345'
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [401,{},{}];
            });

            service.doAlta(altaData.email, altaData.password, altaData.passwordRepeat).then(function (result) {
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['401']);
            });
        });

        it ('Test KO: Probar error en caso de 403',function () {
<<<<<<< HEAD
            var altaData = {
                email: 'pepe@email.com',
                password: '12345',
                password2: '12345'
=======
            var altaData ={
                email:'pepe@email.com',
                password:'12345',
                passwordRepeat:'12345'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [403,{},{}];
            });
<<<<<<< HEAD
            
           service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
=======

            service.doAlta(altaData.email, altaData.password, altaData.passwordRepeat).then(function (result) {
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['403']);
            });
        });

<<<<<<< HEAD
        it ('Test KO: Probar error en caso de 500', function () {
            var altaData ={
                email: 'pepe@email.com',
                password: '12345',
                password2: '12345'
=======
        it ('Test KO: Probar error en caso de 500',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345',
                passwordRepeat:'12345'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [500,{},{}];
            });
<<<<<<< HEAD
            
           service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
=======

            service.doAlta(altaData.email, altaData.password, altaData.passwordRepeat).then(function (result) {
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['500']);
            });
        });

<<<<<<< HEAD
        it ('Test KO: Probar error en caso de 600', function () {
            var altaData = {
                email: 'pepe@email.com',
                password: '12345',
                password2: '12345'
=======
        it ('Test KO: Probar error en caso de 600',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345',
                passwordRepeat:'12345'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [600,{},{}];
            });
<<<<<<< HEAD
            
            service.checkData(altaData.email, altaData.password, altaData.password2).
            then(function (result) {
=======

            service.doAlta(altaData.email, altaData.password,altaData.passwordRepeat).then(function (result) {
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig.default);
            });
        });
    });
    
    describe("Test del controlador de alta", function () {
       var controlador, $httpBackend, config;
        
        beforeEach(inject(function ($controller, $filter, AltaSrv, $state, _$httpBackend_,_config_) {
            controlador = function () {
                $httpBackend = _$httpBackend_;
                config = _config_;
                return $controller('AltaCtrl',{
                    '$filter':$filter,
                    'AltaSrv': AltaSrv,
                    '$state':$state
                });
            }
        }));
        
        
        it('Test OK: Comprobemos que nuestro contralador tiene declaradas las variables y eventos', function () {
           var ctrl = controlador();
            
            expect(ctrl.email).toBeDefined();
            expect(ctrl.password).toBeDefined();
<<<<<<< HEAD
            expect(ctrl.errorMsg).toBeDefined();
            expect(ctrl.loginAction).toBeDefined();
            expect(ctrl.clean).toBeDefined();
            expect(ctrl.alta).toBeDefined();
        });
        
        it('Test KO: Comprobamos que si el mail y el passoword no son validos no se llama al servcio', function () {
           var ctrl = controlador();
            ctrl.email = "";
            ctrl.password = "";
            
            var loginData = {
                email: ctrl.email,
                password: ctrl.password
            };
            
            var configServ = config.backService.loginConf;
            
            $httpBackend.expect(configServ.method, configServ.url, loginData).respond(function () {
                return [200,{},{}]
            });
            
            try{
                ctrl.loginAction();
                $httpBackend.flush();
                expect(true).toBe(false);
            }catch (e){
                expect(true).toBe(true);
            }
        });

        it('Test KO: Actualizamos el mensaje de error', function () {
            var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123123";

            var loginData = {
                email: ctrl.email,
                password: ctrl.password
            };

            var configServ = config.backService.loginConf;
            var configError = config.serviceError;

            $httpBackend.expect(configServ.method, configServ.url, loginData).respond(function () {
                return [404,{},{}]
            });

            try{
                ctrl.loginAction();
                $httpBackend.flush();
                expect(ctrl.errorMsg).toBe(configError['404']);
            }catch (e){
                expect(true).toBe(false);
            }
        });

        it('Test OK: Probemos que el clean limpia el email y el password', function () {
           var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123432";

            ctrl.clean();

            expect(ctrl.email).toBe("");
            expect(ctrl.password).toBe("");
        });
    });

    describe("Test del controlador de alta", function () {
        var controlador, $httpBackend, config;

        beforeEach(inject(function ($controller, $filter, AltaSrv, $state, _$httpBackend_,_config_) {
            controlador = function () {
                $httpBackend = _$httpBackend_;
                config = _config_;
                return $controller('AltaCtrl',{
                    '$filter':$filter,
                    'AltaSrv': AltaSrv,
                    '$state':$state
                });
            }
        }));

        it('Test OK: Comprobemos que nuestro contralador tiene declaradas las variables y eventos', function () {
            var ctrl = controlador();

            expect(ctrl.email).toBeDefined();
            expect(ctrl.password).toBeDefined();
            expect(ctrl.password2).toBeDefined();
            expect(ctrl.errorMsg).toBeDefined();
            expect(ctrl.altaAction).toBeDefined();
            expect(ctrl.clean).toBeDefined();
            expect(ctrl.alta).toBeDefined();
        });

        it('Test KO: Comprobamos que si el mail y los passowords no son validos no se llama al servcio', function () {
            var ctrl = controlador();
            ctrl.email = "";
            ctrl.password = "";
            ctrl.password2 = "";

            var altaData = {
                email: ctrl.email,
                password: ctrl.password,
                password2: ctrl.password2
            };

            var configServ = config.backService.altaConf;

            $httpBackend.expect(configServ.method, configServ.url, altaData).respond(function () {
                return [200,{},{}]
            });

            try{
                ctrl.loginAction();
=======
            expect(ctrl.passwordRepeat).toBeDefined();
            expect(ctrl.errorMsg).toBeDefined();
            expect(ctrl.altaAction).toBeDefined();
            expect(ctrl.clean).toBeDefined();
        });
        
        it('Test KO: Comprobamos que si el mail y el passoword no son validos no se llama al servcio, o las dos pass no sono iguales tampmoco se llama',function () {
           var ctrl = controlador();
            ctrl.email = "";
            ctrl.password = "";
            ctrl.passwordRepeat = "";
            
            var altaData = {
                email: ctrl.email,
                password: ctrl.password,
                passwordRepeat: ctrl.passwordRepeat
            };
            
            var configServ = config.backService.altaConf;
            
            $httpBackend.expect(configServ.method, configServ.url, altaData).respond(function () {
                return [200,{},{}]
            });
            
            try{
                ctrl.altaAction();
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
                $httpBackend.flush();
                expect(true).toBe(false);
            }catch (e){
                expect(true).toBe(true);
            }
        });

<<<<<<< HEAD
        it('Test KO: Actualizamos el mensaje de error', function () {
            var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123123";
            ctrl.password2 = "123123";
=======
        it('Test KO: Actualizamos el mesaje de error',function () {
            var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123123";
            ctrl.passwordRepeat = "123123";
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242

            var altaData = {
                email: ctrl.email,
                password: ctrl.password,
<<<<<<< HEAD
                password2: ctrl.password2
=======
                passwordRepeat: ctrl.passwordRepeat
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
            };

            var configServ = config.backService.altaConf;
            var configError = config.serviceError;

            $httpBackend.expect(configServ.method, configServ.url, altaData).respond(function () {
                return [404,{},{}]
            });

            try{
                ctrl.altaAction();
                $httpBackend.flush();
                expect(ctrl.errorMsg).toBe(configError['404']);
            }catch (e){
                expect(true).toBe(false);
            }
        });

<<<<<<< HEAD
        it('Test OK: Probemos que el clean limpia el email y los 2 password', function () {
            var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123432";
            ctrl.password2 = "123432";
=======
        it('Test OK: Probemos que el clean limpia el email,el password y la repet', function () {
           var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123432";
            ctrl.passwordRepeat = "123432";
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242

            ctrl.clean();

            expect(ctrl.email).toBe("");
            expect(ctrl.password).toBe("");
<<<<<<< HEAD
            expect(ctrl.password2).toBe("");
        });
    });
=======
            expect(ctrl.passwordRepeat).toBe("");
        });

    });

>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
});