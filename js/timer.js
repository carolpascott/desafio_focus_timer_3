import { 
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    endTimer
} from "./elements.js"

export default function Timer() {

    let timerTimerOut = 0
    let minutes = Number(minutesDisplay.textContent)

    function count_down() {
        timerTimerOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            if(seconds <= 0) {
                seconds = 60
                
                if(minutes <= 0) {
                    endTimer.play()
                    reset()
                    buttonPlay.classList.remove('selected')
                    return
                }
                minutes--       
            }
    
            update_display(minutes, --seconds)

            count_down()
        }, 1000)
    }

    function reset() {
        update_display(minutes, 0)
        clearTimeout(timerTimerOut)
        timerTimerOut = 0
    }

    function more_five_minutes () {
        if(timerTimerOut)
            return
       
        if(minutes < 120) {
            minutes += 5
            update_display(minutes, 0) 
        }
    }

    function less_five_minutes () {
        if(timerTimerOut)
            return

        if(minutes > 10){
            minutes -= 5
            update_display(minutes, 0)
        }
     }

    function update_display(newMinutes, seconds) {

        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    return {
        count_down,
        reset,
        more_five_minutes,
        less_five_minutes,
    }
}
