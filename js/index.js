let [...showButtons] = document.querySelectorAll(".works__shower");
let [...descriptions] = document.querySelectorAll(".hidden--js");

let addClickListener = (button, description) => {
  button.addEventListener('click', () => {
    button.classList.toggle('works__shower--opened');
    description.classList.toggle('hidden--js')
  })
};

for (let i = 0; i < showButtons.length; i++) {
  let button = showButtons[i];
  let description = descriptions[i];

  addClickListener(button, description)
}
