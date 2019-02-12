export default this.state = {
  questionary: [
    {
      id: 0,
      spanishText: 'Tome asiento, por favor',
      mayanText: 'Mèent uts a kutàal',
      audio: 'audio.m4a',
      hora: false,
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
      audio: 'audio2.m4a',
      hora: false,
      options: [
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
      audio: 'audio2.m4a',
      hora: false,
      options: [
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
      audio: 'audio2.m4a',
      hora: false,
      options: [
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
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 5,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 5,
      spanishText: '¿Por qué le solicitan las pruebas?',
      mayanText: 'Ba’axten ku k’áatal tech le xíixo’',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 6,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 6,
      spanishText: 'Ahora le voy a hacer unas preguntas de rutina',
      mayanText: 'Bin in ka’ah in bèet tech wa hayp’e’el k’at chí sùuk u bèeta’al',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 7,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 7,
      spanishText: '¿Presenta en ayuno de 10 a 12 horas?',
      mayanText: 'Ma’ a hàant mixba’al ichil lo wa 12 tsíil k’ìini’ bey hàanen, ma’, mixba’al hàanteh.',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 10,
          title: 'Si'
        },
        {
          nextID: 8,
          title: 'No'
        }
      ]
    },
    {
      id: 8,
      spanishText: '¿A que hora comió?',
      mayanText: 'Ba’ax tsíil k’ìinil ka hàaneh',
      audio: 'audio2.m4a',
      hora: true,
      options: [
        {
          nextID: 0,
          title: 'Hora'
        }
      ]
    },
    {
      id: 9,
      spanishText: '¿Que comió?',
      mayanText: 'Ba’ax ta hàantah',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 10,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 10,
      spanishText: '¿Puede esperar a que se cumpla el tiempo requerido?',
      mayanText: 'Ba’ax ta hàantah',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 11,
          title: 'Si'
        },
        {
          nextID: 12,
          title: 'No'
        }
      ]
    },
    {
      id: 11,
      spanishText: 'Espere el tiempo que falta para cumplir con el ayuno',
      mayanText: "Páa'teh u k’uchul le tsíil k’íinil ku binehtik ti’ a su’uk’ino’",
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 13,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 12,
      spanishText: 'Regrese otro día en ayuno de 10 a 12 horas',
      mayanText: 'Ba’ax ta hàantah',
      audio: 'audio2.m4a',
      hora: false,
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
      id: 13,
      spanishText: '¿Ha tomado ningún tipo de medicamento antes de venir?',
      mayanText: 'Ta wuk’ah wa ts’àak ma’ili’ talakechi’',
      audio: 'audio2.m4a',
      hora: false,
      options: [
        {
          nextID: 13,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 14,
      spanishText: '¿Qué tipo de medicamento?',
      mayanText: 'Ba’ax ts’àakil',
      hora: false,
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 15,
          title: 'Esporadico'
        },
        {
          nextID: 15,
          title: 'Habitual'
        },
        {
          nextID: 15,
          title: 'Buen funcionamiento de medicamento'
        }
      ]
    },
    {
      id: 15,
      spanishText: '¿A que hora lo tomó?',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta wuk’ah',
      audio: 'audio2.m4a',
      hora: true,
      options: [
        {
          nextID: 16,
          title: 'Hora'
        }
      ]
    },
    {
      id: 16,
      spanishText: '¿Ha realizado ejercicio antes de venir?',
      mayanText: 'Ta bèetah peksah wíinklal ma’ili’ talakechi’.',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 17,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 17,
      spanishText: 'Seleccione en la pantalla que tipo de ejercicio realizo',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta bèetah',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 18,
          title: 'Correr'
        },
        {
          nextID: 19,
          title: 'Caminar'
        },
        {
          nextID: 0,
          title: 'Estiramiento'
        }

      ]
    },
    {
      id: 18,
      spanishText: 'Debe regresar otro día sin haber realizado ejercicio antes del análisis',
      mayanText: 'Unah u suut tu láak’ k’íin ma’ u bèet péeksah u wíinklal ma’ili’ bèeta’ak le xíixo’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 0,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 19,
      spanishText: '¿Por cuánto tiempo realizo el ejercicio? ',
      mayanText: "Hay p’éel tsíil k'ìinil ta bèetah peksah wíinklalo’",
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 20,
          title: 'Menos de 45 mintuos'
        },
        {
          nextID: 18,
          title: 'Más de 45 minutos'
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
      id: 21,
      spanishText: '¿Ha tomado algún tipo de bebida alcohólica en las últimas 24 horas? ',
      mayanText: 'Ta wuk’ah wa k’ah ha’ wa ula’ak anis ma’  u  ts’áah hunp’éel k’iini’',
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
    },
    {
      id: 22,
      spanishText: '¿Tomo algún tipo de bebida?',
      mayanText: "Ta wuk'ah uláak’ uk'ul",
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
    },
    {
      id: 23,
      spanishText: 'Seleccione en la pantalla cual fue la bebida que tomó',
      mayanText: 'Yeey ba’ax uk’ulil ta wuk’ah',
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
    },
    {
      id: 24,
      spanishText: 'Debe regresar otro día sin haber ingerido bebidas alcohólicas',
      mayanText: 'Unah u suut tu láak’ k’íin ma’ a wuk’mah anísi’',
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
    },
    {
      id: 25,
      spanishText: '¿A qué hora bebió/fumó?',
      mayanText: 'Ba’ax tsíil k’ìinil ka ta wuk’ah ha’, bey xan k ata tsu’uts’ah chamal',
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
    },
    {
      id: 26,
      spanishText: '¿Solicitó PSA?',
      mayanText: "ta k'áatah PSA",
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 17,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 27,
      spanishText: '¿Ha tenido relaciones sexuales o se masturbo antes de venir a la prueba?',
      mayanText: 'Yanchahech yeetel a wiichan wa yéetel a watan wa ta kokolah a kèep ichil óoxp’éel k’íin ma’ili’ talakech ti’ le xíixo’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 18,
          title: 'Si'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 28,
      spanishText: 'Debe regresar otro día sin haber tenido relaciones sexuales o haberse masturbado',
      mayanText: 'Unah u suut tu láak’ k’íin ma’ wantal yéetel xíib ko’olel mix a ko’okolik a kèep',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 12,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 29,
      spanishText: '¿Se le realizarán otros análisis además del PSA?',
      mayanText: 'Yàan wa u bèeta’al u láak’ xíixe’ kex ka bèeta’ak PSA',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 20,
          title: 'Siguiente'
        }
      ]
    },
    {
      id: 30,
      spanishText: '¿Está programado para alguna operación?',
      mayanText: 'Ts’a’an wa u k’íinil a xo’otol',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 21,
          title: 'Si'
        },
        {
          nextID: 21,
          title: 'No'
        }
      ]
    },
    {
      id: 31,
      spanishText: '¿Está tomando algún tratamiento anticoagulante? Medicina que adelgaza la sangre',
      mayanText: "Ta'an wa u ts’a’abaltech ts’àak yo’o’lal u ha’ach’tal k’i’ik’el",
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 22,
          title: 'Si'
        },
        {
          nextID: 22,
          title: 'No'
        }
      ]
    },
    {
      id: 32,
      spanishText: 'Seleccione en la pantalla cual es el motivo del análisis.',
      mayanText: 'Yeey ba’axten ku k’áatal tech le xíixo’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 0,
          title: 'Preoperatorios'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 32,
      spanishText: 'Seleccione en la pantalla que tipo de medicamento tomo',
      mayanText: 'Yeey máakalma’ak ts’àak ta wuk’aho’',
      audio: 'audio2.m4a',
      options: [
        {
          nextID: 0,
          title: 'Preoperatorios'
        },
        {
          nextID: 0,
          title: 'No'
        }
      ]
    },
    {
      id: 33,
      spanishText: 'Vamos a proceder a tomar la muestra ¿De cual brazo normalmente le toman muestra? Izquierdo/derecho/indistinto',
      mayanText: 'Bineh ka’ah k ho’oseh a k’i’ik’elo’ máakalmáak ti’ a k’ab sùuk u ho’osa’al a lk’i’ik’el, ta ts’íik wa ta no’oh/ he’ máakalmaké',
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
    },
    {
      id: 34,
      spanishText: 'Extienda el brazo derecho / Extienda el brazo izquierdo',
      mayanText: 'Tatsah no’oh k’ab/tats’ah ts’íik k’ab',
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
    },
    {
      id: 35,
      spanishText: 'Apoye su brazo en la superficie',
      mayanText: 'Pehkunt yóok’ol le mayeko',
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
    },
    {
      id: 36,
      spanishText: 'Le voy a poner un torniquete (liga)',
      mayanText: 'Bin in ka’ah in k’axeh',
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
    },
    {
      id: 37,
      spanishText: 'Cierre el puño y apriete.',
      mayanText: 'Wol u yàal a k’ab chich',
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
    },
    {
      id: 38,
      spanishText: 'Muy bien',
      mayanText: 'Hach ma’alob',
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
    },
    {
      id: 39,
      spanishText: 'No se mueva en el momento que sienta el piquete',
      mayanText: 'Ma’ péek le ken a wu’uy le lòom',
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
    },
    {
      id: 40,
      spanishText: 'Abra el puño',
      mayanText: 'Tats’ u yàal a k’ab',
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
    },
    {
      id: 41,
      spanishText: 'Flexione el brazo',
      mayanText: 'Wut’s a k’ab',
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
    },
    {
      id: 42,
      spanishText: 'Le voy a poner un parche',
      mayanText: 'Bin in ka’ah in ts’áah pìits’i’',
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
    },
    {
      id: 43,
      spanishText: 'Mantenga doblado el brazo por 5 minutos',
      mayanText: 'P’at wùuts’il a k’ab ichil ho’péel síitukil',
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
    },
    {
      id: 44,
      spanishText: 'Le voy a entregar una encuesta de satisfacción para que conteste y deposite en el buzón',
      mayanText: 'Bin in ka’ah in ts’áah tech hunpéel k’áat chi’o’ob utia’al a núukeh ts’o’okole’ ts’áahte´chàan kúuchil tu’ux ku ts’a’abalo’',
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
    },
    {
      id: 45,
      spanishText: 'Hasta luego, que tenga un buen día',
      mayanText: 'Ma’alob tak tu láak k’ìin, ka yanaktech hunp’éel utsil k’íin',
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
    },
    {
      id: 45,
      spanishText: 'Regrese otro día por favor',
      mayanText: "Meent uts ta sùut tuláak’ k'íin",
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
    },
    {
      id: 46,
      spanishText: 'Puedo hacer el analisis pero sus resultados pueden no ser confiables porque usted no viene en las condiciones adecuadas',
      mayanText: "He' u p’aahtal u bèetik le xíixo’ ba’ale’ ma’ hach hàah kun hóok’oli’ tumen ma’ tàalech he’ bix a’ala’ab techo’",
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
