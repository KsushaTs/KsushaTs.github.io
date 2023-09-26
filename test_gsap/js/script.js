document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".btn-js");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let ripple = e.target
        .closest(".ripple-container-js")
        .querySelector(".ripple-js");
      gsap.to(ripple, {
        duration: 0.5,
        opacity: 0,
        scale: 1.5,
        clearProps: "all",
      });
    });
  });
});
