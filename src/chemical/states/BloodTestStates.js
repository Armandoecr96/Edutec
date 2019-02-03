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
                    title: 'Si'
                },
                {
                    nextID: 1,
                    title: 'No'
                }
            ]

        },
        {
            id: 1,
            spanishText: 'Cambio de palabra',
            mayanText: "Mèent",
            audio: 'audio1.m4a',
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