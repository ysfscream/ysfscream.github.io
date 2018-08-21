export default {
  date: new Date(),
  getTimeTitle() {
    const hour = this.date.getHours()
    const timeDom = document.querySelector('#timeTitle')
    let timeTile = ''
    if (hour > 8 && hour <= 12) {
      timeTile = 'Good morning 🌻'
    } else if (hour > 12 && hour <= 19) {
      timeTile = 'Good afternoon 🌞'
    } else if (hour > 19 && hour <= 23) {
      timeTile = 'Good night 🧟'
    } else {
      timeTile = '(～﹃～)~zZ 🐷'
    }
    timeDom.innerText = timeTile
  },
  progressOfYear() {
    const isLeapYear = (n) => {
      return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0
    }

    const year = parseInt(this.date.getFullYear())
    const timeDom = document.querySelector('#timeYear')
    timeDom.innerText = year

    const time = Date.parse(this.date)
    const lasttime=Date.parse(`${year}-01-01`)
    const day=parseInt((time-lasttime)/(1000*60*60*24))

    const allDay = isLeapYear(year) ? 366 : 365
    const percentYear = Math.round((day / allDay) * 100)

    const progressDom = document.querySelector('.wired-progress')
    const percentDom = document.querySelector('#percentTime')
    progressDom.value = percentYear
    percentDom.innerText = percentYear
  }
}
