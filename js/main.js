// LOADER

const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", hideLoader);
window.addEventListener("load", hideLoader);

// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

if(reveals.length > 0){

  const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }

    });

  }, {
    threshold:0.15
  });

  reveals.forEach((el) =>
    observer.observe(el)
  );

}