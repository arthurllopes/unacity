export const useTime = (horarios: any[]) => {
    if (horarios) {
        const date = new Date();
        const day = date.getDay();
        const hourNow = date.getHours()
        const todayHour = horarios[day]
        const {horario} = todayHour
        //Caso o horario de funcionamento do dia anterior for ate a madrugada do outo dia
        //E o estabelecimento fique fechado o resto do dia
        if (!(horarios[day-1]?.ate > hourNow) && (horario === 'fechado')) {
            return false
        } 
        else if (horario === '24hrs') {
            //Caso esteja aberto o dia todo
            return true
        } 
        else if (horario?.de <= hourNow < horario?.ate) {
            //Hora de agora precisa estar dentro do horario de funcionamento daquele dia
            return true
        } 
        else if (horarios[day-1]?.ate > hourNow) {
            //Caso o horario do dia anterior for ate 3 da manha do outro dia por exemplo
            //Vai verficar esse horario de fechamento do dia anterior com a hora atual do dia atual
            return true
        } 
        else {
            return false
        }
    
    }
}