const unidades = {
    "1": {
        nome: "Unidade Labareda",
        modalidades: {
            "1":{
                nome: "Natação infantil",
                horarios: [
                    "Terça e Quinta: 09:10h-09:40h",
                    "Terça e Quinta: 14:00h-14:30h",
                    "Quarta e Sexta: 14:30h-15:00h",
                    "Quarta e Setxa: 17:30h-18h",
                ]
            },
            "2":{
                nome: "Natação adulto (acima de 9 anos)",
                horarios: [
                    "Terça e Quinta: 07:15h-08h",
                    "Terça e Quinta: 09:45h-10:30h",
                    "Terça e Quinta: 15:30h-16:15h",
                    "Terça e Quinta: 16:20h-17:05h",
                    "Terça e Quinta: 20:00h-20:45h",
                    "Terça e Quinta: 20:45h-21:30h",
                    "Quarta e Sexta: 16:10h-16:55h",
                    "Quarta e Sexta: 18:15h-19h",
                ]
            },
                "3":{
                nome: "Hidroginástica",
                horarios: [
                    "Terça e Quinta: 08:15h-09:00h",
                    "Terça e Quinta: 14:30h-15:15h",
                    "Quarta: 20:00h-20:45h",
                    "Quarta e Sexta: 09:45h-10:30h",
                    "Quarta e Sexta: 15:20h-16:05h",
                ]
            },
                "4":{
                nome: "Baby Infantil (2 anos e 6 meses até 3 anos e 6 meses)",
                horarios: [
                    "Quarta e Sexta: 14h-14:30h", 
                    "Quarta e Sexta: 17h-17:30h",
                ]  

            }
     
        }
    },

    "2": {
        nome: "Unidade Vila Olímpica",
        modalidades: {
            "1":{
                nome: "Natação infantil",
                horarios: [
                    "Segunda e Quarta: 18h-18:30h",
                    "Terça à Sexta: 07:45h-08:15h",
                    "Terça à Sexta: 08:45h-09:15h",
                    "Terça à Sexta: 10:15h-10:45h",
                    "Terça à Sexta: 14:45h-15:15h",

                ]
            },
            "2":{
                nome: "Natação adulto",
                horarios: [
                    "Segunda e Quarta: 18:45h-19:30h",
                    "Segunda e Quarta: 19:30h-20:15h",
                    "Segunda e Quarta: 20:15h-21h",    
                    "Terça à Sexta: 06:15h-07h",
                    "Terça à Sexta: 07h-07:45h",
                    "Terça à Sexta: 08h-08:45h",
                    "Terça à Sexta: 09:20h-10:05h",
                    "Terça à Sexta: 10:10h-10:55h",
                    "Terça à Sexta: 10:55h-11:40h",
                    "Terça à Sexta: 13:45h-14:30h",
                    "Terça à Sexta: 16h-16:45h",
                    "Terça à Sexta: 16:45h-17:30h",
                    "Terça e Quinta: 17:50h-18:30h",
                    "Terça e Quinta: 18:45h-19:30h",
                    "Terça: 19:30-20:15h",
                ]
            },
            "3":{
                nome: "Hidroginástica",
                horarios: [
                    "Terça à Sexta: 07h-07:45h",
                    "Terça à Sexta: 09:15h-10h",
                    "Terça à Sexta: 13:45h-14:30h",
                    "Quarta e Quinta: 18:15h-19h",
                ]
            },
            "4":{
                nome: "Baby Infantil (2 anos e 6 meses até 3 anos e 6 meses)",
                horarios: [
                    "Terça e Quinta:14:30h-15h", 
                    "Terça e Quinta: 17:30h-18h",
                ]
            },
            "5":{
                nome: "Iniciação e Aprendizado I e II",
                horarios: [ 
                    "Terça e Quinta: 15h-15:30h (Iniciação)",
                    "Terça e Quinta: 15:30h-16h (Aprendizado I)",
                    "Terça e Quinta: 18h-18:30h (Aprendizado II)",
                ]
            }
        }            
        
    }
};

module.exports = unidades;