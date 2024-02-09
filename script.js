const package = document.querySelector('.package');
const ticket = document.querySelector('.golden-ticket')

package.onclick = () => {
  package.classList.add('removed')
  
  if(Math.random() > 0.5) {
    ticket.classList.add('winner')
  }
}

const retry = document.querySelector('.try-again');

retry.onclick = () => {
  package.classList.remove('removed')
  ticket.classList.remove('winner')
}