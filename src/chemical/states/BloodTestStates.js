export default this.state = {
    questionary: [
        {
            id: 0,
            spanishText: 'Tome asiento, por favor',
            mayanText: "Mèent uts a kutàal",
            audio: 'audio.m4a',
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
            mayanText: "Bin in ka’ah in ch’a’a a k’aaba’",
            audio: 'audio2.m4a',
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
            mayanText: "Bix a k’àaba’, a’alten tu láakal",
            audio: 'audio2.m4a',
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
            mayanText: "Hay p’éel ya’ab yantech.",
            audio: 'audio2.m4a',
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
            mayanText: "Máakal máak u xòokil u nu’ukul a t’àan",
            audio: 'audio2.m4a',
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
            mayanText: "Ba’axten ku k’áatal tech le xíixo’",
            audio: 'audio2.m4a',
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
            mayanText: "Bin in ka’ah in bèet tech wa hayp’e’el k’at chí sùuk u bèeta’al",
            audio: 'audio2.m4a',
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
            mayanText: "Ma’ a hàant mixba’al ichil lo wa 12 tsíil k’ìini’ bey hàanen, ma’, mixba’al hàanteh.",
            audio: 'audio2.m4a',
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
            mayanText: "Ba’ax tsíil k’ìinil ka hàaneh",
            audio: 'audio2.m4a',
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
            mayanText: "Ba’ax ta hàantah",
            audio: 'audio2.m4a',
            options: [
                {
                    nextID: 10,
                    title: 'Siguiente'
                }
            ]
        },
        //--------------------------- Ciclos faltantes ------------------------------//
        {
            id: 10,
            spanishText: '¿Puede esperar a que se cumpla el tiempo requerido?',
            mayanText: "Ba’ax ta hàantah",
            audio: 'audio2.m4a',
            options: [
                {
                    nextID: 12,
                    title: 'Si'
                },
                {
                    nextID: 11,
                    title: 'No'
                }
            ]
        }, {
            id: 11,
            spanishText: 'Regrese otro día en ayuno de 10 a 12 horas',
            mayanText: "Ba’ax ta hàantah",
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
            id: 12,
            spanishText: '¿Ha tomado ningún tipo de medicamento antes de venir?',
            mayanText: "Ta wuk’ah wa ts’àak ma’ili’ talakechi’",
            audio: 'audio2.m4a',
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
            id: 13,
            spanishText: '¿Qué medicamento?',
            mayanText: "Ba’ax ts’àakil",
            audio: 'audio2.m4a',
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
            mayanText: "Ba’ax tsíil k’ìinil ka ta wuk’ah",
            audio: 'audio2.m4a',
            options: [
                {
                    nextID: 0,
                    title: 'Hora'
                }
            ]
        },
        {
            id: 15,
            spanishText: '¿Ha realizado ejercicio antes de venir?',
            mayanText: "Ta bèetah peksah wíinklal ma’ili’ talakechi’.",
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
            id: 16,
            spanishText: '¿A qué hora lo realizó?',
            mayanText: "Ba’ax tsíil k’ìinil ka ta bèetah",
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
            id: 17,
            spanishText: '¿Qué ejercicio realizó?',
            mayanText: "Ba’ax peksah wíinklal ta bèetah",
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
            id: 18,
            spanishText: '¿Ha ingerido bebidas alcohólicas o fumado hace menos de 24 horas?',
            mayanText: "Ta wuk’ah wa k’ah ha’ wa ula’ak anis, ta tsu’uts’a’ chamal ma’ u ts’áah hunp’éel k’iini’",
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
            id: 19,
            spanishText: '¿A qué hora bebió/fumó?',
            mayanText: "Ba’ax tsíil k’ìinil ka ta wuk’ah ha’, bey xan k ata tsu’uts’ah chamal",
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
            id: 20,
            spanishText: '¿Qué bebió/fumó?',
            mayanText: "Ba’ax ta wuk’ah, ba’ax chamalil ta ts’u’uts’ah",
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
            spanishText: 'Vamos a proceder a tomar la muestra ¿De cual brazo normalmente le toman muestra? Izquierdo/derecho/indistinto',
            mayanText: "Bineh ka’ah k ho’oseh a k’i’ik’elo’ máakalmáak ti’ a k’ab sùuk u ho’osa’al a lk’i’ik’el, ta ts’íik wa ta no’oh/ he’ máakalmaké",
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
            spanishText: 'Extienda el brazo derecho / Extienda el brazo izquierdo',
            mayanText: "Tatsah no’oh k’ab/tats’ah ts’íik k’ab",
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
            spanishText: 'Apoye su brazo en la superficie',
            mayanText: "Pehkunt yóok’ol le mayeko",
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
            spanishText: 'Le voy a poner un torniquete (liga)',
            mayanText: "Bin in ka’ah in k’axeh",
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
            spanishText: 'Cierre el puño y apriete.',
            mayanText: "Wol u yàal a k’ab chich",
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
            spanishText: 'Muy bien',
            mayanText: "Hach ma’alob",
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
            id: 27,
            spanishText: 'No se mueva en el momento que sienta el piquete',
            mayanText: "Ma’ péek le ken a wu’uy le lòom",
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
            id: 28,
            spanishText: 'Abra el puño',
            mayanText: "Tats’ u yàal a k’ab",
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
            id: 29,
            spanishText: 'Flexione el brazo',
            mayanText: "Wut’s a k’ab",
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
            id: 30,
            spanishText: 'Le voy a poner un parche',
            mayanText: "Bin in ka’ah in ts’áah pìits’i’",
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
            id: 31,
            spanishText: 'Mantenga doblado el brazo por 5 minutos',
            mayanText: "P’at wùuts’il a k’ab ichil ho’péel síitukil",
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
            id: 32,
            spanishText: 'Le voy a entregar una encuesta de satisfacción para que conteste y deposite en el buzón',
            mayanText: "Bin in ka’ah in ts’áah tech hunpéel k’áat chi’o’ob utia’al a núukeh ts’o’okole’ ts’áahte´chàan kúuchil tu’ux ku ts’a’abalo’",
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
            id: 33,
            spanishText: 'Hasta luego, que tenga un buen día',
            mayanText: "Ma’alob tak tu láak k’ìin, ka yanaktech hunp’éel utsil k’íin",
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