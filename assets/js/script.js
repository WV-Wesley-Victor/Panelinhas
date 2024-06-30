document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("check");

  checkbox.addEventListener("change", function () {
    var headerMenu = document.querySelector(".header-menu");
    headerMenu.classList.toggle("show-menu", checkbox.checked);
  });
});

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleButtonDisplay() {
  const btnTopo = document.getElementById("btnTopo");
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 20) {
    btnTopo.style.display = "block";
    btnTopo.style.opacity = "1";
  } else {
    btnTopo.style.opacity = "0";
    setTimeout(() => {
      if (btnTopo.style.opacity === "0") {
        btnTopo.style.display = "none";
      }
    }, 300);
  }
}

window.addEventListener("scroll", toggleButtonDisplay);

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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}
