console.log('Client side javascript file is loading')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const Location = search.value
  messageOne.textContent = 'Loading ...'
  messageOne.textContent = ''

  fetch('http://localhost:3000/weather?address=' + encodeURIComponent(Location) + '').then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.Location
        messagetwo.textContent = data.forecast


        // console.log()
        // console.log(data.forecast)
      }
    })
  })
})
