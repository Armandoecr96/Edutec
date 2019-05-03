export default this.state = {
  questionary: [
    {
      id: 0,
      spanishText: 'Tome asiento, por favor',
      mayanText: 'Mèent uts a kutàal',
      hora: false,
      audio: 'audio30.m4a',
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
      mayanText: 'Bin in ka’ah in ch’a’a a k’aaba’',
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
      audio: 'audio25.m4a',
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
      mayanText: 'Hay p’éel ya’ab yantech.',
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
      spanishText: 'A continuación le hare una serie de preguntas de rutina.',
      mayanText: 'Bin in ka’ah in bèet tech wa hayp’e’el k’at chí sùuk u bèeta’al.',
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
      spanishText: '¿Viene en ayuno de 10 a 12 horas?',
      mayanText: 'Ma’ a hàantik mixba’al ichil 10 wa 12 tsíil k’ìini’',
      hora: false,
      audio: 'audio20.m4a',
      options: [
        {
          backID: 5,
          title: 'Atrás'
        },
        {
          nextID: 12,
          audio: 'audio23.m4a',
          title: 'Si'
        },
        {
          nextID: 7,
          audio: 'audio24.m4a',
          title: 'No'
        }
      ]
    },
    {
      id: 7,
      spanishText: '¿A qué hora comió por última vez?',
      mayanText: 'Ba’ax tsíil k’ìinil ka hàanech',
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
          nextID: 9,
          audio: 'audio23.m4a',
          title: 'Si'
        },
        {
          nextID: 10,
          audio: 'audio24.m4a',
          title: 'No'
        }
      ]
    },
    {
      id: 9,
      spanishText: '¿Puede esperar a que se cumpla el tiempo requerido?',
      mayanText: "He' a páatik u ts’o’okol a su'uk'ine’",
      audio: 'voz45.3gp',
      hora: false,
      options: [
        {
          nextID: 11,
          title: 'Si'
        },
        {
          nextID: 10,
          title: 'No'
        }
      ]
    },
    {
      id: 10,
      spanishText: 'Regrese otro día en ayuno de 10 a 12 horas',
      mayanText: 'Ba’ax ta hàantah',
      hora: false,
      audio: 'audio9.m4a',
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
      mayanText: "Páa'teh u k’uchul le tsíil k’íinil ku binehtik ti’ a su’uk’ino’",
      hora: false,
      audio: 'audio12.m4a',
      options: [
        {
          nextID: 12,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 12,
      spanishText: '¿Ha tomado algún tipo de medicamento antes de venir?',
      mayanText: 'Ta wuk’ah wa ts’àak ma’ili’ talakechi’',
      hora: false,
      audio: 'audio14.m4a',
      options: [
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
      audio: 'audio16.m4a',
      options: [
        {
          nextID: 14,
          title: 'Esporadico'
        },
        {
          nextID: 14,
          title: 'Habitual'
        },
        {
          nextID: 14,
          title: 'Buen funcionamiento de medicamento'
        }
      ]
    },
    {
      id: 14,
      spanishText: '¿A que hora lo tomó?',
      mayanText: "Ba’ax tsíil k’ìinil ka ta wuk’ah le ts'àako'",
      hora: true,
      audio: 'audio6.m4a',
      options: [
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
      spanishText: 'Puedo hacer el analisis pero sus resultados pueden no ser confiables porque usted no viene en las condiciones adecuadas',
      mayanText: "He' u p’aahtal u bèetik le xíixo’ ba’ale’ ma’ hach hàah kun hóok’oli’ tumen ma’ tàalech he’ bix a’ala’ab techo’",
      hora: true,
      audio: 'audio48.m4a',
      options: [
        {
          nextID: 16,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 16,
      spanishText: '¿Ha realizado ejercicio antes de venir?',
      mayanText: 'Ta bèetah peksah wíinklal ma’ili’ talakechi’.',
      audio: 'audio13.m4a',
      options: [
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
      mayanText: 'yeey Ba’ax peksah wíinklal ta bèetah',
      audio: 'audio15.m4a',
      options: [
        {
          nextID: 19,
          title: 'Correr'
        },
        {
          nextID: 18,
          title: 'Caminar'
        },
        {
          nextID: 20,
          title: 'Estiramiento'
        }
      ]
    },
    {
      id: 18,
      spanishText: '¿Por cuánto tiempo realizo el ejercicio?',
      mayanText: "Hay p’éel tsíil k'ìinil ta bèetah peksah wíinklalo’",
      hora: true,
      audio: 'audio46.m4a',
      options: [
        {
          nextID: 20,
          title: 'Menos de 45'
        },
        {
          nextID: 19,
          title: 'Mas de 45'
        }
      ]
    },
    {
      id: 19,
      spanishText: 'Debe regresar otro día sin haber realizado ejercicio antes del análisis',
      mayanText: 'Unah u suut tu láak’ k’íin ma’ u bèet péeksah u wíinklal ma’ili’ bèeta’ak le xíixo’',
      audio: 'audio43.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 20,
      spanishText: '¿Ha fumado en las últimas 24 horas?',
      mayanText: 'ta  tsu’uts’a’  chamal  ma’  u  ts’áah hunp’éel k’iini’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 51,
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
      mayanText: 'Ta wuk’ah wa k’ah ha’ wa ula’ak anis ma’  u  ts’áah hunp’éel k’iini’',
      audio: 'audio4.m4a',
      options: [
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
      mayanText: 'Unah u suut tu láak’ k’íin ma’ a wuk’mah anísi’',
      audio: 'audio10.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 23,
      spanishText: '¿Tomo algún otro tipo de bebida?',
      mayanText: "Ta wuk'ah uláak’ uk'ul",
      audio: 'audio17.m4a',
      options: [
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
      mayanText: 'Yeey ba’ax uk’ulil ta wuk’ah',
      audio: 'audio58.m4a',
      options: [
        {
          nextID: 25,
          title: 'Café',
          src: '../assets/images/cofi.png'
        },
        {
          nextID: 25,
          title: 'Jugo',
          src: '../assets/images/jugo.png'
        },
        {
          nextID: 25,
          title: 'Agua',
          src: '../assets/images/agua.png'
        },
        {
          nextID: 25,
          title: 'Chocolate',
          src: '../assets/images/chocolate.png'
        },
        {
          nextID: 25,
          title: 'Refresco',
          src: '../assets/images/refresco.png'
        }
      ]
    },
    {
      id: 25,
      spanishText: '¿A qué hora bebió?',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta wuk’ah',
      hora: false,
      audio: 'audio.m4a',
      options: [
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
      hora: true,
      audio: 'audio29.m4a',
      options: [
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
      mayanText: 'Ba’ax ta hàantah',
      audio: 'voz45.3gp',
      hora: false,
      options: [
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
      spanishText: 'Regrese otro día en ayuno de 10 a 12 horas',
      mayanText: 'Le k’oha’ano’ unah u tàal tu su’uk’in ichil 10 tak 12 tsíil k’ìin.',
      hora: false,
      audio: 'audio9.m4a',
      options: [
        {
          nextID: 0,
          title: 'Salir'
        }
      ]
    },
    {
      id: 29,
      spanishText: 'Espere el tiempo que falta para cumplir con el ayuno',
      mayanText: "Páa'teh u k’uchul le tsíil k’íinil ku binehtik ti’ a su’uk’ino’",
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
      id: 30,
      spanishText: '¿Solicitó PSA?',
      mayanText: "ta k'áatah PSA",
      audio: 'audio63.m4a',
      options: [
        {
          nextID: 31,
          title: 'Si'
        },
        {
          nextID: 34,
          title: 'No'
        }
      ]
    },
    {
      id: 31,
      spanishText: '¿Ha tenido relaciones sexuales o se masturbo antes de venir a la prueba?',
      mayanText: 'Yanchahech yeetel a wiichan wa yéetel a watan wa ta kokolah a kèep ichil óoxp’éel k’íin ma’ili’ talakech ti’ le xíixo’',
      audio: 'audio45.m4a',
      options: [
        {
          nextID: 32,
          title: 'Si'
        },
        {
          nextID: 34,
          title: 'No'
        }
      ]
    },
    {
      id: 32,
      spanishText: '¿Se le realizarán otros análisis además del PSA?',
      mayanText: 'Yàan wa u bèeta’al u láak’ xíixe’ kex ka bèeta’ak PSA',
      audio: 'audio67.m4a',
      options: [
        {
          nextID: 34,
          title: 'Si'
        },
        {
          nextID: 51,
          title: 'No'
        }
      ]
    },
    {
      id: 33,
      spanishText: 'Debe regresar otro día sin haber tenido relaciones sexuales o haberse masturbado',
      mayanText: 'Unah u suut tu láak’ k’íin ma’ wantal yéetel xíib ko’olel mix a ko’okolik a kèep',
      audio: 'audio44.m4a',
      options: [
        {
          nextID: 0,
          title: 'Sair'
        }
      ]
    },
    {
      id: 34,
      spanishText: '¿Está programado para alguna operación?',
      mayanText: 'Ts’a’an wa u k’íinil a xo’otol',
      audio: 'audio38.m4a',
      options: [
        {
          nextID: 35,
          title: 'Si'
        },
        {
          nextID: 35,
          title: 'No'
        }
      ]
    },
    {
      id: 35,
      spanishText: '¿Está tomando algún tratamiento anticoagulante?',
      mayanText: "Ta'an wa u ts’a’abaltech ts’àak yo’o’lal u ha’ach’tal k’i’ik’el",
      audio: 'audio35.m4a',
      options: [
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
      spanishText: 'Seleccione en la pantalla cual es el motivo del análisis.',
      mayanText: 'Yeey ba’axten ku k’áatal tech le xíixo’',
      audio: 'audio37.m4a',
      options: [
        {
          nextID: 37,
          title: 'Control'
        },
        {
          nextID: 38,
          title: 'Preoperatorios'
        }
      ]
    },
    {
      id: 37,
      spanishText: 'Seleccione en la pantalla cual es el motivo del análisis.',
      mayanText: 'Yeey ba’axten ku k’áatal tech le xíixo’',
      audio: 'audio37.m4a',
      options: [
        {
          nextID: 0,
          title: 'Embarazo'
        },
        {
          nextID: 0,
          title: 'Diabetes'
        },
        {
          nextID: 0,
          title: 'Colesterol'
        },
        {
          nextID: 0,
          title: 'Hipertensión'
        }
      ]
    }
  ]
}
