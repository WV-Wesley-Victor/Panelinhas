document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".opinioes");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  function smoothScroll(target, direction, duration = 1000) {
    const start = scrollContainer.scrollLeft;
    const totalWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const increment = direction === "next" ? totalWidth / 3 : -totalWidth / 3;
    const end = start + increment;
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      scrollContainer.scrollLeft = start + increment * progress;

      const canScrollRight =
        scrollContainer.scrollLeft < totalWidth - containerWidth;
      const canScrollLeft = scrollContainer.scrollLeft > 0;

      nextBtn.style.opacity = canScrollRight ? 1 : 0.5;
      backBtn.style.opacity = canScrollLeft ? 1 : 0.5;

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  nextBtn.addEventListener("click", () =>
    smoothScroll(scrollContainer, "next")
  );
  backBtn.addEventListener("click", () =>
    smoothScroll(scrollContainer, "back")
  );

  backBtn.style.opacity = 0.5;
});
