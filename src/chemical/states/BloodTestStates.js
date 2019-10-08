export default this.state = {
  questionary: [
    {
      id: 0,
      spanishText: 'Vamos a proceder a tomar la muestra ¿De cual brazo normalmente le toman muestra?',
      mayanText: 'Binej ka’aj k jo’osej a k’i’ik’elo’ máakalmáak ti’ a k’ab sùuk u jo’osa’al a lk’i’ik’el, ta ts’íik wa ta no’oj/ je’ máakalmaké.',
      audio: 'audio47.m4a',
      options: [
        {
          nextID: 1,
          title: 'Izquierda'
        },
        {
          nextID: 2,
          title: 'Derecha'
        }
      ]
    },
    {
      id: 1,
      spanishText: 'Extienda el brazo izquierdo',
      mayanText: 'Tats’aj ts’íik k’ab.',
      audio: 'voz00067.ogg',
      options: [
        {
          backID: 0,
          title: 'Atras'
        },
        {
          nextID: 3,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 2,
      spanishText: 'Extienda el brazo derecha',
      mayanText: 'Tatsaj no’oj k’ab.',
      audio: 'voz00065.ogg',
      options: [
        {
          backID: 0,
          title: 'Atras'
        },
        {
          nextID: 3,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 3,
      spanishText: null,
      mayanText: null,
      source: '../assets/images/alargarN.gif',
      audio: 'voz58.3gp',
      options: [
        {
          backID: 0,
          title: 'Atras'
        },
        {
          nextID: 4,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 4,
      spanishText: 'Apoye su brazo en la superficie',
      mayanText: 'Pejkunt yóok’ol le mayeko',
      audio: 'audio68.m4a',
      options: [
        {
          backID: 3,
          title: 'Atras'
        },
        {
          nextID: 5,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 5,
      spanishText: 'Le voy a poner un torniquete (liga)',
      mayanText: 'Bin in ka’aj in k’axej',
      audio: 'Voz00084.3gp',
      options: [
        {
          backID: 4,
          title: 'Atras'
        },
        {
          nextID: 6,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 6,
      spanishText: 'Cierre el puño y apriete',
      mayanText: 'Wol u yàal a k’ab chich',
      audio: 'audio69.m4a',
      options: [
        {
          backID: 5,
          title: 'Atras'
        },
        {
          nextID: 7,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 7,
      spanishText: null,
      mayanText: null,
      source: '../assets/images/cerrar.gif',
      audio: 'voz58.3gp',
      options: [
        {
          backID: 6,
          title: 'Atras'
        },
        {
          nextID: 8,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 8,
      spanishText: 'Muy bien',
      mayanText: 'Jach ma’alob',
      audio: 'audio57.m4a',
      options: [
        {
          backID: 7,
          title: 'Atras'
        },
        {
          nextID: 9,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 9,
      spanishText: 'No se mueva en el momento que sienta el piquete',
      mayanText: 'Ma’ péek le ken a wu’uy le lòom',
      audio: 'audio36.m4a',
      options: [
        {
          backID: 8,
          title: 'Atras'
        },
        {
          nextID: 10,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 10,
      spanishText: null,
      mayanText: null,
      source: '../assets/images/a1.gif',
      audio: 'voz58.3gp',
      options: [
        {
          backID: 9,
          title: 'Atras'
        },
        {
          nextID: 11,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 11,
      spanishText: 'Abra el puño',
      mayanText: 'Tats’ u yàal a k’ab',
      audio: 'audio53.m4a',
      options: [
        {
          backID: 10,
          title: 'Atras'
        },
        {
          nextID: 12,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 12,
      spanishText: null,
      mayanText: null,
      source: '../assets/images/a1.gif',
      audio: 'voz58.3gp',
      options: [
        {
          backID: 11,
          title: 'Atras'
        },
        {
          nextID: 13,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 13,
      spanishText: 'Flexione el brazo',
      mayanText: 'Wut’s a k’ab',
      audio: 'voz54.3gp',
      options: [
        {
          backID: 12,
          title: 'Atras'
        },
        {
          nextID: 14,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 14,
      spanishText: null,
      mayanText: null,
      source: '../assets/images/a1.gif',
      audio: 'voz58.3gp',
      options: [
        {
          backID: 13,
          title: 'Atras'
        },
        {
          nextID: 15,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 15,
      spanishText: 'Le voy a poner un parche',
      mayanText: 'Bin in ka’aj in ts’áaj pìits’i’',
      audio: 'audio49.m4a',
      options: [
        {
          backID: 14,
          title: 'Atras'
        },
        {
          nextID: 16,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 16,
      spanishText: 'Mantenga doblado el brazo por 5 minutos',
      mayanText: 'P’at wùuts’il a k’ab ichil jo’péel síitukil',
      audio: 'instruccion50.ogg',
      options: [
        {
          backID: 15,
          title: 'Atras'
        },
        {
          nextID: 17,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 17,
      spanishText: 'Hasta luego, que tenga un buen día',
      mayanText: 'Ma’alob tak tu láak k’ìin, ka yanaktech junp’éel utsil k’íin',
      audio: 'voz55.3gp',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 18,
      spanishText: 'Regrese otro día por favor',
      mayanText: "Meent uts ta sùut tuláak’ k'íin",
      audio: 'audio52.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 19,
      spanishText: 'Puedo hacer el análisis pero sus resultados pueden no ser confiables porque usted no viene en las condiciones adecuadas',
      mayanText: "Je' u p’aajtal u bèetik le xíixo’ ba’ale’ ma’ jach jàaj kun hóok’oli’ tumen ma’ tàalech he’ bix a’ala’ab techo’",
      audio: 'instruccion48.ogg',
      options: [
        {
          nextID: 0,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 18,
      spanishText: 'Le voy a entregar una encuesta de satisfacción para que conteste y deposite en el buzón',
      mayanText: 'Bin in ka’aj in ts’áaj tech junpéel k’áat chi’o’ob utia’al a núukej ts’o’okole’ ts’áajte´chàan kúuchil tu’ux ku ts’a’abalo’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 0,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    }
  ]

}
