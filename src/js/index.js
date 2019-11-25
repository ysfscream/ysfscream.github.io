import '../assets/scss/style.scss'

import Darkmode from 'darkmode-js'
import { WiredButton, WiredIconButton, WiredCard, WiredTooltip, WiredProgress } from "wired-elements"
import intro from './intro.js'
import Time from './time.js'

// Dark mode
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true
const options = {
  label: '🌓',
}
const darkmode = new Darkmode(options)
if (isDarkMode) {
  darkmode.toggle()
}
darkmode.showWidget()

// JSON resume
const introCardText = document.querySelector('#json')
const screenWidth = document.body.clientWidth
screenWidth > 768
  ? introCardText.innerHTML = `<pre>${intro()}</pre>`
    : introCardText.innerHTML = intro()

// Time info
Time.getTimeTitle()
Time.progressOfYear()
