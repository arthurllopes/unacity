export const useTime = (horarios: any[]) => {
    if (horarios) {
        const date = new Date();
        const day = date.getDay();
        const hourNow = date.getHours()
        const todayHour = horarios[day]
        const {horario} = todayHour
        console.log(horarios[day-1])
        //Caso o horario de funcionamento do dia anterior for ate a madrugada do outo dia
        //E o estabelecimento fique fechado o resto do dia
        if (!(horarios[day-1].ate > hourNow) && (horario === 'fechado')) {
            return false
        } else {
            //Caso esteja aberto o dia todo
            if (horario === '24hrs') {
                return true
            }
            //Hora de agora precisa estar dentro do horario de funcionamento daquele dia
            if (horario.de <= hourNow < horario.ate) {
                return true
            }
        }
    }
}