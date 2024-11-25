const cardContainer = document.getElementById('card-container')
const overlay = document.getElementById('overlay')
const overlayImg = document.getElementById('overlay-img')
const overlayBtn = document.getElementById('overlay-btn')
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then((resp) => {
        resp.data.forEach(element => {
            cardContainer.innerHTML +=
                `
         <div class="card d-flex">
           <img src="./img/pin.svg" class="pin" alt="">
            <div class="card-img mt-3">
            <img src="${element.url}" alt="">
            </div>
            <div class="card-text">${element.title}</div>
         </div>
        `
        })
        const cards = document.querySelectorAll('.card')
        cards.forEach((curCard) => {
            curCard.addEventListener('click', () => {
                overlay.classList.remove('d-none')
                const img = curCard.querySelector('.card-img img')
                overlayImg.src = img.src
            })
        })

    })

overlayBtn.addEventListener('click', () => {
    overlay.classList.add('d-none')
})