document.addEventListener('DOMContentLoaded', () => {

    /* Variables */
    let FORMAT_24 = true
    const HTML_CLOCK = document.querySelector('#clock')

    const time_now = () => {
        const _date = new Date()
        let _hour = _date.getHours()
        let _minute = time_update(_date.getMinutes())
        let _second =  time_update(_date.getSeconds())

        if (FORMAT_24) {
            HTML_CLOCK.innerText = `${_hour} : ${_minute} : ${_second}`
        } else {
            const AmPm = (_hour >= 12) ? 'PM' : 'AM'
            _hour= _hour % 12 || 12
            HTML_CLOCK.innerText = `${_hour} : ${_minute} : ${_second} ${AmPm}`
        }

        setTimeout(time_now, 1000)
    }

    /* Auxiliar function */
    const time_update = num => {
        return (num < 10) ? `0${num}` : num
    }

    time_now()


    /* Buttons */
    const BUTTON_FORMAT_24 = document.querySelector('#format_24')
    const BUTTON_FORMAT_12 = document.querySelector('#format_12')

    BUTTON_FORMAT_24.addEventListener('click',()=> FORMAT_24 = true)
    BUTTON_FORMAT_12.addEventListener('click',()=> FORMAT_24 = false)
})