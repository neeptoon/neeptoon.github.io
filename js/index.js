let checkbox = document.querySelector(".works__input");
let p = document.querySelector(".js-hidden")

let pHandler = function () {
  p.classList.toggle('hidden')
}

checkbox.addEventListener('change', pHandler)
