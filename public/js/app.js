const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherIcon = document.querySelector('#weather-icon')
const weatherDescription = document.querySelector('#weather-description')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    weatherIcon.src = ''
    weatherDescription.textContent = ''

    fetch('/weather?address='+address).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                return messageOne.textContent = data.error
            }
            messageOne.textContent = ''
            messageTwo.textContent = data.data.text
            weatherIcon.src = data.data.weatherIcon
            console.log(data.data)
            weatherDescription.textContent = data.data.weatherDescription
        })
    })
})