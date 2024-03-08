const stickySection = [...document.querySelectorAll(".sticky")];

// console.log(stickySection);
window.addEventListener("scroll", (e) => {
  for (i = 0; i < stickySection.length; i++) {
    transform(stickySection[i]);
  }
});
function transform(section) {
  //   console.log(section);
  const vali = section.getBoundingClientRect().width;
  console.log(vali);
  const offsettop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector(".scroll_section");
  let pas;
  let parcentage = ((window.scrollY - offsettop) / window.innerHeight) * 100;
  parcentage = parcentage < 10 ? 0 : parcentage;
  //   console.log(parcentage);
  if (parcentage > 10) {
    // console.log("big");
  } else if (parcentage <= 0) {
    pas = 0;
  }
  parcentage = parcentage < 0 ? 0 : parcentage > 400 ? 400 : parcentage;

  scrollSection.style.transform = `translate3d(${-parcentage}vw,0,0)`;
}
