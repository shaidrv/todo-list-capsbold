document.querySelector('.card__body').addEventListener('mouseenter', () => {
  document.querySelector('.wrapper').classList.add('hovered')
})

document.querySelector('.card__body').addEventListener('mouseleave', () => {
  document.querySelector('.wrapper').classList.remove('hovered')
})

document.querySelectorAll('.list__item').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('checked')
  })
})
