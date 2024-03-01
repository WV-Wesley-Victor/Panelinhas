document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector(".opinioes");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  function smoothScroll(target, direction) {
    let start = scrollContainer.scrollLeft;
    let increment = direction === "next" ? 1050 : -1050;
    let end = start + increment;
    let duration = 1000;
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1);
      scrollContainer.scrollLeft = start + increment * progress;
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  nextBtn.addEventListener("click", () =>
    smoothScroll(scrollContainer, "next")
  );
  backBtn.addEventListener("click", () =>
    smoothScroll(scrollContainer, "back")
  );
});
