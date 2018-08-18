import '../assets/scss/style.scss'

import { WiredButton, WiredCard, WiredTooltip } from "wired-elements"
import intro from './intro.js'


const introCardText = document.querySelector('#json')
const screenWidth = document.body.clientWidth
screenWidth > 768
  ? introCardText.innerHTML = `<pre>${intro()}</pre>`
    : introCardText.innerHTML = intro()
