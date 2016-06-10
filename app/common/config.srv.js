function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            pass: /^.{2,}$/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPass:'Password mal formado',
<<<<<<< HEAD
            differentPasswords:'Passwords distintos'
=======
            invalidPassEqual:'Password no coincidentes'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
        },
        backService:{
            loginConf:{
                method:'GET',
                url:'app/mocks/loginSrv.json',
                responseType: 'json'
            },
<<<<<<< HEAD
            altaConf:{
                method:'GET',
                url:'app/mocks/altaSrv.json',
                responseType:'json'
                
=======
             altaConf:{
                method:'GET',
                url:'app/mocks/altaSrv.json',
                responseType: 'json'
>>>>>>> 9ee30c8bc1d6d0820085a7adda4f8d32663d4242
            }
        },
        serviceError:{
            "404":"No se encuentra el servicio, pongase en contacto con el administrador",
            "401":"Usuario o password incorrecto",
            "403":"No tienes permisos para acceder",
            "500":"Fallo del sistema pongase en contacto con el administrador",
            default:"Buena suerta y que la fuerza te acompañe"
        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());
