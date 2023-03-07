import {
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio("sounds/button.wav")
  const kitchenTimer = new Audio("sounds/timer.mp3")
  const bgAudioForest = new Audio("sounds/Floresta.wav")
  const bgAudioRain = new Audio("sounds/Chuva.wav")
  const bgAudioCoffeeShop = new Audio("sounds/Cafeteria.wav")
  const bgAudioFireplace = new Audio("sounds/Lareira.wav")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true

  function pressButton() {
      buttonPressAudio.play()
  }

  function timeEnd() {
      kitchenTimer.play()
  }

  function audioForest() {
      cardForest.classList.contains('active')
      ? bgAudioForest.play()
      : bgAudioForest.pause()
  }

  function audioRain() {
      cardRain.classList.contains('active')
      ? bgAudioRain.play()
      : bgAudioRain.pause()
  }

  function audioCoffeeShop() {
      cardCoffeeShop.classList.contains('active')
      ? bgAudioCoffeeShop.play()
      : bgAudioCoffeeShop.pause()
  }

  function audioFireplace() {
      cardFireplace.classList.contains('active')
      ? bgAudioFireplace.play()
      : bgAudioFireplace.pause()
  }

  function setAudioVolume() {
      bgAudioForest.volume = inputForestVolume.value
      bgAudioRain.volume = inputRainVolume.value
      bgAudioCoffeeShop.volume = inputCoffeeShopVolume.value
      bgAudioFireplace.volume = inputFireplaceVolume.value
  }

  function resetForestVolume() {
      inputForestVolume.value = 0.5
  }

  function resetRainVolume() {
      inputRainVolume.value = 0.5
  }

  function resetCoffeeShopVolume() {
      inputCoffeeShopVolume.value = 0.5
  }

  function resetFireplaceVolume() {
      inputFireplaceVolume.value = 0.5
  }

  return {
      pressButton,
      timeEnd,
      audioForest,
      audioRain,
      audioCoffeeShop,
      audioFireplace,
      setAudioVolume,
      resetForestVolume,
      resetRainVolume,
      resetCoffeeShopVolume,
      resetFireplaceVolume
  }
}