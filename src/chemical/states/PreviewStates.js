export default this.state = {
  questionary: [
    {
      id: 0,
      spanishText: 'Tome asiento, por favor',
      mayanText: 'Meent uts kuleen',
      hora: false,
      audio: 'voz00081.3gp',
      options: [
        {
          nextID: 1,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 1,
      spanishText: 'Voy a corroborar sus datos',
      mayanText: 'Bin in ka’aj in ch’a’a a k’aaba’',
      hora: false,
      audio: 'audio22.m4a',
      options: [
        {
          backID: 0,
          title: 'Atrás'
        },
        {
          nextID: 2,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 2,
      spanishText: '¿Cuál es su nombre completo?',
      mayanText: 'Bix a k’àaba’, a’alten tu láakal',
      audio: 'audiopreguntas003.ogg',
      hora: false,
      options: [
        {
          backID: 1,
          title: 'Atrás'
        },
        {
          nextID: 3,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 3,
      spanishText: '¿Cuántos años tiene?',
      mayanText: 'Jay p’éel ja’ab yantech',
      hora: false,
      audio: 'audio26.m4a',
      options: [
        {
          backID: 2,
          title: 'Atrás'
        },
        {
          nextID: 4,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 4,
      spanishText: '¿Cuál es su número telefónico?',
      mayanText: 'Máakal máak u xòokil u nu’ukul a t’àan',
      hora: false,
      audio: 'audio27.m4a',
      options: [
        {
          backID: 3,
          title: 'Atrás'
        },
        {
          nextID: 5,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 5,
      spanishText: 'A continuación le haré una serie de preguntas de rutina',
      mayanText: 'Bin in ka’aj in bèet tech wa jayp’e’el k’at chí sùuk u bèeta’al.',
      audio: 'audio21.m4a',
      hora: false,
      options: [
        {
          backID: 4,
          title: 'Atrás'
        },
        {
          nextID: 6,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 6,
      spanishText: '¿Comió algo desde hace 10 o 12 horas?',
      mayanText: 'Ma’ a jàantik mixba’al ichil 10 wa 12 tsíil k’ìini’ ',
      hora: false,
      audio: 'audio20.m4a',
      options: [
        {
          backID: 5,
          title: 'Atrás'
        },
        {
          nextID: 7,
          audio: 'audio24.m4a',
          title: 'Si'
        },
        {
          nextID: 12,
          audio: 'audio23.m4a',
          title: 'No'
        }

      ]
    },
    {
      id: 7,
      spanishText: '¿A qué hora comió por última vez?',
      mayanText: 'Ba’ax tsíil k’ìinil ka jàanech',
      hora: false,
      audio: 'audio29.m4a',
      options: [
        {
          backID: 6,
          title: 'Atrás'
        },
        {
          title: 'Hora',
          nextYes: 12,
          nextNo: 10,
          nextProp: 9
        }
      ]
    },
    {
      id: 8,
      spanishText: '¿Faltan menos de dos horas para cumplir con el ayuno?',
      mayanText: "Ka'ap’éel tsíil k’ìin u bin a su’uk’in",
      hora: true,
      audio: 'audio28.m4a',
      options: [
        {
          backID: 7,
          title: 'Atrás'
        },
        {
          nextID: 10,
          audio: 'audio24.m4a',
          title: 'No'
        },
        {
          nextID: 9,
          audio: 'audio23.m4a',
          title: 'Si'
        }
      ]
    },
    {
      id: 9,
      spanishText: '¿Puede esperar a que se cumpla el tiempo requerido?',
      mayanText: "Je' a páatik u ts’o’okol a su'uk'ine’",
      audio: 'voz45.3gp',
      hora: false,
      options: [
        {
          backID: 8,
          title: 'Atrás'
        },
        {
          nextID: 10,
          title: 'No'
        },
        {
          nextID: 11,
          title: 'Si'
        }
      ]
    },
    {
      id: 10,
      spanishText: 'Regrese otro día',
      mayanText: "Meent uts ta sùut tuláak’ k'íin",
      hora: false,
      audio: 'audio52.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 11,
      spanishText: 'Espere el tiempo que falta para cumplir con el ayuno',
      mayanText: "Páa'tej u k’uchul le tsíil k’íinil ku binejtik ti’ a su’uk’ino’",
      hora: false,
      audio: 'audio12.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 12,
      spanishText: '¿Ha tomado algún tipo de medicamento antes de venir?',
      mayanText: 'Ta wuk’aj wa ts’àak ma’ili’ talakechi’',
      hora: false,
      audio: 'pregunta014.ogg',
      options: [
        {
          backID: 6,
          title: 'Atrás'
        },
        {
          nextID: 13,
          title: 'Si'
        },
        {
          nextID: 16,
          title: 'No'
        }
      ]
    },
    {
      id: 13,
      spanishText: '¿Qué tipo de medicamento?',
      mayanText: 'Ba’ax ts’àakil',
      hora: false,
      audio: 'Voz00090.3gp',
      options: [
        {
          backID: 12,
          title: 'Atrás'
        },
        {
          nextID: 14,
          title: 'Siguiente'
          // src: require('../../assets/images/esporadico.png')
        }
        // {
        //   nextID: 14,
        //   title: 'habitual',
        //   src: require('../../assets/images/habitual.png')
        // }
      ]
    },
    {
      id: 14,
      spanishText: '¿A que hora lo tomó?',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta wuk’aj.',
      hora: true,
      audio: 'audio6.m4a',
      options: [
        {
          backID: 13,
          title: 'Atrás'
        },
        {
          title: 'Hora',
          nextYes: 15,
          nextNo: 15,
          nextProp: 15
        }
      ]
    },
    {
      id: 15,
      spanishText: 'El tomar un medicamento antes de un análisis podría afectar los resultado',
      mayanText: 'A wuk’ik ts’aak ma’ili beeta’ak le x’iix je’ u k’exik u xuul le xíixo’',
      hora: false,
      audio: 'audio11.m4a',
      options: [
        {
          backID: 14,
          title: 'Atrás'
        },
        {
          nextID: 16,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 16,
      spanishText: '¿Ha realizado ejercicio antes de venir?',
      mayanText: 'Ta bèetaj peksaj wíinklal ma’ili’ talakechi’.',
      hora: false,
      audio: 'audio13.m4a',
      options: [
        {
          backID: 12,
          title: 'Atrás'
        },
        {
          nextID: 17,
          title: 'Si'
        },
        {
          nextID: 20,
          title: 'No'
        }
      ]
    },
    {
      id: 17,
      spanishText: 'Seleccione en la pantalla que tipo de ejercicio realizo',
      mayanText: 'Yeey ba’ax peksaj wíinklal ta bèetaj',
      hora: false,
      audio: 'audio15.m4a',
      options: [
        {
          backID: 16,
          title: 'Atrás'
        },
        {
          nextID: 19,
          title: 'correr',
          audio: 'audio18.m4a',
          src: require('../../assets/images/correr.png')
        },
        {
          nextID: 18,
          title: 'caminar',
          audio: 'audio8.m4a',
          src: require('../../assets/images/caminar.png')
        },
        {
          nextID: 20,
          title: 'estiramiento',
          audio: 'audio19.m4a',
          src: require('../../assets/images/estiramiento.png')
        }
      ]
    },
    {
      id: 18,
      spanishText: '¿Por cuánto tiempo realizo el ejercicio?',
      mayanText: "Jay p’éel tsíil k'ìinil ta bèetaj peksaj wíinklalo’",
      hora: true,
      audio: 'voz00079.3gp',
      options: [
        {
          backID: 17,
          title: 'Atrás'
        },
        {
          nextID: 20,
          title: 'Menos de 45',
          src: require('../../assets/images/menos45.png')
        },
        {
          nextID: 19,
          title: 'Mas de 45',
          src: require('../../assets/images/mas45.png')
        }
      ]
    },
    {
      id: 19,
      spanishText: 'Debe regresar otro día sin haber realizado ejercicio antes del análisis',
      mayanText: 'Unaj u suut tu láak’ k’íin ma’ u bèet péeksaj u wíinklal ma’ili’ bèeta’ak le xíixo’',
      hora: false,
      audio: 'audio43.m4a',
      options: [
        {
          backID: 16,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 20,
      spanishText: '¿Ha fumado en las últimas 24 horas?',
      mayanText: 'Ta tsu’uts’a’ chamal ma’ u ts’áaj junp’éel k’iini’',
      hora: false,
      audio: 'audio2.m4a',
      options: [
        {
          backID: 16,
          title: 'Atrás'
        },
        {
          nextID: 37,
          title: 'Si'
        },
        {
          nextID: 21,
          title: 'No'
        }
      ]
    },
    {
      id: 21,
      spanishText: '¿Ha tomado algún tipo de bebida alcohólica en las últimas 24 horas? ',
      mayanText: 'Ta wuk’aj wa k’aj ja’ wa ula’ak anis ma’ u ts’áaj junp’éel k’iini’',
      hora: false,
      audio: 'audio4.m4a',
      options: [
        {
          backID: 20,
          title: 'Atrás'
        },
        {
          nextID: 22,
          title: 'Si'
        },
        {
          nextID: 23,
          title: 'No'
        }
      ]
    },
    {
      id: 22,
      spanishText: 'Debe regresar otro día sin haber ingerido bebidas alcohólicas',
      mayanText: 'Unaj u suut tu láak’ k’íin ma’ a wuk’maj anísi’',
      hora: false,
      audio: 'audio10.m4a',
      options: [
        {
          backID: 21,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 23,
      spanishText: '¿Tomo algún otro tipo de bebida?',
      mayanText: "Ta wuk'aj uláak’ uk'ul",
      hora: false,
      audio: 'audiopreguntas012.ogg',
      options: [
        {
          backID: 21,
          title: 'Atrás'
        },
        {
          nextID: 24,
          title: 'Si'
        },
        {
          nextID: 30,
          title: 'No'
        }
      ]
    },
    {
      id: 24,
      spanishText: 'Seleccione en la pantalla cual fue la bebida que tomó',
      mayanText: 'Yeey ba’ax uk’ulil ta wuk’aj',
      hora: false,
      audio: 'audio58.m4a',
      options: [
        {
          backID: 23,
          title: 'Atrás'
        },
        {
          nextID: 25,
          title: 'Café',
          src: require('../../assets/images/cofi.png')
        },
        {
          nextID: 25,
          title: 'Jugo',
          src: require('../../assets/images/jugo.png')
        },
        {
          nextID: 30,
          title: 'Agua',
          src: require('../../assets/images/agua.png')
        },
        {
          nextID: 25,
          title: 'Chocolate',
          src: require('../../assets/images/chocolate.png')
        },
        {
          nextID: 25,
          title: 'Refresco',
          src: require('../../assets/images/refresco.png')
        }
      ]
    },
    {
      id: 25,
      spanishText: '¿A qué hora bebió?',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta wuk’aj',
      hora: true,
      audio: 'audio.m4a',
      options: [
        {
          backID: 24,
          title: 'Atrás'
        },
        {
          title: 'Hora',
          nextYes: 30,
          nextNo: 28,
          nextProp: 27
        }
      ]
    },
    {
      id: 26,
      spanishText: '¿Faltan menos de dos horas para cumplir con el ayuno?',
      mayanText: "Ka'ap’éel tsíil k’ìin u bin a su’uk’in",
      hora: false,
      audio: 'audio29.m4a',
      options: [
        {
          backID: 25,
          title: 'Atrás'
        },
        {
          nextID: 27,
          audio: 'audio23.m4a',
          title: 'Si'
        },
        {
          nextID: 28,
          audio: 'audio24.m4a',
          title: 'No'
        }
      ]
    },
    {
      id: 27,
      spanishText: '¿Puede esperar a que se cumpla el tiempo requerido?',
      mayanText: "Je' a páatik u ts’o’okol a su'uk'ine’",
      audio: 'voz45.3gp',
      hora: false,
      options: [
        {
          backID: 25,
          title: 'Atrás'
        },
        {
          nextID: 29,
          title: 'Si'
        },
        {
          nextID: 28,
          title: 'No'
        }
      ]
    },
    {
      id: 28,
      spanishText: 'Regrese otro día',
      mayanText: "Meent uts ta sùut tuláak’ k'íin",
      hora: false,
      audio: 'audio52.m4a',
      options: [
        {
          backID: 23,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 29,
      spanishText: 'Espere el tiempo que falta para cumplir con el ayuno',
      mayanText: "Páa'tej u k’uchul le tsíil k’íinil ku binejtik ti’ a su’uk’ino’",
      hora: false,
      audio: 'audio12.m4a',
      options: [
        {
          backID: 23,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 30,
      spanishText: '¿Es hombre o mujer?',
      mayanText: '',
      hora: false,
      mayan: false,
      audio: 'audio63.m4a',
      options: [
        {
          backID: 23,
          title: 'Atrás'
        },
        {
          nextID: 31,
          title: 'Hombre',
          src: require('../../assets/images/hombre.png')
        },
        {
          nextID: 35,
          title: 'Mujer',
          src: require('../../assets/images/mujer.png')
        }
      ]
    },
    {
      id: 31,
      spanishText: '¿Solicitó examen de próstata?',
      mayanText: "ta k'áataj xíixo' próstata?",
      hora: false,
      audio: 'voz00059.ogg',
      options: [
        {
          backID: 30,
          title: 'Atrás'
        },
        {
          nextID: 32,
          title: 'Si'
        },
        {
          nextID: 35,
          title: 'No'
        }
      ]
    },
    {
      id: 32,
      spanishText: '¿Ha tenido relaciones sexuales o se masturbo antes de venir a la prueba?',
      mayanText: 'Yanchajech yeetel a wiichan wa yéetel a watan wa ta kokolaj a kèep ichil óoxp’éel k’íin ma’ili’ talakech ti’ le xíixo’',
      hora: false,
      audio: 'audio45.m4a',
      options: [
        {
          backID: 31,
          title: 'Atrás'
        },
        {
          nextID: 33,
          title: 'Si'
        },
        {
          nextID: 35,
          title: 'No'
        }
      ]
    },
    {
      id: 33,
      spanishText: '¿Se le realizarán otros análisis además del examen de próstata?',
      mayanText: 'Yàan wa u bèeta’al u láak’ xíixe’ kex ka bèeta’ak próstata',
      hora: false,
      audio: 'voz00060.ogg',
      options: [
        {
          backID: 32,
          title: 'Atrás'
        },
        {
          nextID: 35,
          title: 'Si'
        },
        {
          nextID: 37,
          title: 'No'
        }
      ]
    },
    {
      id: 34,
      spanishText: 'Debe regresar otro día sin haber tenido relaciones sexuales o haberse masturbado',
      mayanText: 'Unaj u suut tu láak’ k’íin ma’ wantal yéetel xíib ko’olel mix a ko’okolik a kèep',
      hora: false,
      audio: 'audio44.m4a',
      options: [
        {
          backID: 30,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Sair'
        }
      ]
    },
    {
      id: 35,
      spanishText: '¿Está programado para alguna operación?',
      mayanText: 'Ts’a’an wa u k’íinil a xo’otol',
      hora: false,
      audio: 'audio38.m4a',
      options: [
        {
          backID: 30,
          title: 'Atrás'
        },
        {
          nextID: 36,
          title: 'Si'
        },
        {
          nextID: 36,
          title: 'No'
        }
      ]
    },
    {
      id: 36,
      spanishText: '¿Está tomando algún tratamiento anticoagulante?',
      mayanText: "Ta'an wa u ts’a’abaltech ts’àak yo’o’lal u ja’ach’tal k’i’ik’el",
      hora: false,
      audio: 'voz00061.ogg',
      options: [
        {
          backID: 35,
          title: 'Atrás'
        },
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 37,
      spanishText: 'Regrese otro día por favor',
      mayanText: "Meent uts ta sùut tuláak’ k'íin",
      audio: 'audio52.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    }
  ]
}
