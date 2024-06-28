document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".opinioes");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  function smoothScroll(target, direction, duration = 1000) {
    const start = scrollContainer.scrollLeft;
    const totalWidth = scrollContainer.scrollWidth;
    const numElements = 2;
    const increment =
      direction === "next"
        ? totalWidth / numElements
        : -totalWidth / numElements;
    const end = start + increment;
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
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
