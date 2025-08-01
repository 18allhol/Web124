// Allyvia Holland Javascript 4 07-15-25

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => {
  a.addEventListener('mouseenter', highlightLink);
  a.addEventListener('focus', highlightLink);
  a.addEventListener('blur', () => {
    highlight.style.width = `0`;
    highlight.style.height = `0`;
  });
});
