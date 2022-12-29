const buttonLightMode = document.querySelector('#btnLightMode')
const buttonDarkMode = document.querySelector('#btnDarkMode')

const body = document.querySelector('body')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffee = document.querySelector('.coffee')
const buttonSoundFireplace = document.querySelector('.fireplace')

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const endTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const soundForest = new Audio("../audios/Floresta.wav")
const soundRain = new Audio("../audios/Chuva.wav")
const soundCoffee = new Audio("../audios/Cafeteria.wav")
const soundFireplace = new Audio("../audios/Lareira.wav")

const buttonVolumeForest = document.querySelector('#forestVolume')
const buttonVolumeRain = document.querySelector('#rainVolume')
const buttonVolumeCoffee = document.querySelector('#coffeeVolume')
const buttonVolumeFireplace = document.querySelector('#fireplaceVolume')

soundForest.loop = true
soundRain.loop = true
soundCoffee.loop = true
soundFireplace.loop = true

export {
    body,
    buttonLightMode,
    buttonDarkMode,
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFireplace,
    buttonPressAudio,
    endTimer,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
    buttonVolumeForest,
    buttonVolumeRain,
    buttonVolumeCoffee,
    buttonVolumeFireplace
}
