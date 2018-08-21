import '../assets/scss/style.scss'

import { WiredButton, WiredIconButton, WiredCard, WiredTooltip, WiredProgress } from "wired-elements"
import intro from './intro.js'
import Time from './time.js'

// JSON resume
const introCardText = document.querySelector('#json')
const screenWidth = document.body.clientWidth
screenWidth > 768
  ? introCardText.innerHTML = `<pre>${intro()}</pre>`
    : introCardText.innerHTML = intro()

// time info
Time.getTimeTitle()
Time.progressOfYear()
