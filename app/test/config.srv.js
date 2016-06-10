function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            pass: /^[\p{Z}\s]*(?:[^\p{Z}\s][\p{Z}\s]*){3,}/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPassword:'Contraseña no valida'
        },
        backService:{
            loginConf:{
                method:'POST',
                url:'/test',
                responseType: 'json'
            },
             altaConf:{
                method:'POST',
                url:'/alta',
                responseType:'json'
                
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