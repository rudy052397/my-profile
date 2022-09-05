const skills = () => {
  const containerSkill = document.querySelector('.section--skill');
  const skill = document.querySelector('.skill');

  const scrollWidth = (element) => {
    let currentScrollLeft = element.scrollLeft;
    let maxScrollLeft = element.scrollWidth - element.clientWidth;
    let scrollWidth = (currentScrollLeft / maxScrollLeft) * 100;
    return scrollWidth;
  }

  skill.addEventListener('wheel', e => {
    let maxScrollLeft = skill.scrollWidth - skill.clientWidth;
    if (maxScrollLeft > 0) {
      if (!((skill.scrollLeft == 0 && e.deltaY < 0) || (skill.scrollLeft == maxScrollLeft && e.deltaY > 0))) {
        skill.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }

    skill.style.setProperty('--scroll-width', `${scrollWidth(skill)}%`);
  });
  document.addEventListener('scroll',()=>{

    // console.log(document.documentElement.scrollTop);
  });
};
export default skills;