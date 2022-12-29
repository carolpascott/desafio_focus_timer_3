import {
    body,
    buttonLightMode,
    buttonDarkMode,
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFireplace,
    buttonPressAudio,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
    buttonVolumeForest,
    buttonVolumeRain,
    buttonVolumeCoffee,
    buttonVolumeFireplace
} from "./elements.js"

export default function Events({ timer }) {

    let play_forest = false
    let play_rain = false
    let play_coffee = false
    let play_fireplace = false

    buttonLightMode.addEventListener('click', function() {
        body.classList.add('darkMode')
    })

    buttonDarkMode.addEventListener('click', function() {
        body.classList.remove('darkMode')
    })

    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('selected')
        timer.count_down()
        buttonPressAudio.play()
    })

    buttonStop.addEventListener('click', function() {
        buttonPlay.classList.remove('selected')
        timer.reset()
        buttonPressAudio.play()
    })

    buttonMore.addEventListener('click', function() {
        timer.more_five_minutes()
        buttonPressAudio.play()
    })

    buttonLess.addEventListener('click', function() {
        timer.less_five_minutes()
        buttonPressAudio.play()
    })

    buttonVolumeForest.addEventListener('input', function() {
        if(play_forest)
            play_forest = false

        soundForest.volume = buttonVolumeForest.value
    })

    buttonVolumeRain.addEventListener('input', function() {
        if(play_rain)
            play_rain = false

        soundRain.volume = buttonVolumeRain.value
    })

    buttonVolumeCoffee.addEventListener('input', function() {
        if(play_coffee)
            play_coffee = false

        soundCoffee.volume = buttonVolumeCoffee.value
    })

    buttonVolumeFireplace.addEventListener('input', function() {
        if(play_fireplace)
            play_fireplace = false

        soundFireplace.volume = buttonVolumeFireplace.value
    })

    buttonSoundForest.addEventListener('click', function() {
        no_selected()
        play_forest =~ play_forest

        if(play_forest) {
            buttonSoundForest.classList.add('selected')
            soundForest.play()
            play_rain = false
            play_coffee = false
            play_fireplace = false
        }
    })

    buttonSoundRain.addEventListener('click', function() {
        no_selected()
        play_rain =~ play_rain
        if(play_rain) {
            buttonSoundRain.classList.add('selected')
            soundRain.play()
            play_forest = false
            play_coffee = false
            play_fireplace = false
        }
    })

    buttonSoundCoffee.addEventListener('click', function() {
        no_selected()
        play_coffee =~ play_coffee
        if(play_coffee) {
            buttonSoundCoffee.classList.add('selected')
            soundCoffee.play()
            play_forest = false
            play_rain = false
            play_fireplace = false
        }
    })

    buttonSoundFireplace.addEventListener('click', function() {
        no_selected()
        play_fireplace =~ play_fireplace
        if(play_fireplace) {
            buttonSoundFireplace.classList.add('selected')
            soundFireplace.play()
            play_forest = false
            play_rain = false
            play_coffee = false
        }
    })    

    function no_selected () {
        buttonSoundForest.classList.remove('selected')
        buttonSoundRain.classList.remove('selected')
        buttonSoundCoffee.classList.remove('selected')
        buttonSoundFireplace.classList.remove('selected')
        soundForest.pause()
        soundRain.pause()
        soundCoffee.pause()
        soundFireplace.pause()
    }
}
