const animationScroll = () => {
  const animatedElements = document.querySelectorAll('.animation-before');

  const showElement = () => {
    for (const element of animatedElements) {
      let offsetPositionElement = element.getBoundingClientRect().y;
      if (offsetPositionElement < innerHeight * 0.7) {
        element.classList.add('animation-after');
      }
    }
  };

  window.addEventListener('scroll', showElement)
}
export default animationScroll;