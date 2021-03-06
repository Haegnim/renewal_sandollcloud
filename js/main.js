function MheaderAni() {
  let beforeMwinTop = document.documentElement.scrollTop;

  document.addEventListener("scroll", function () {
    const Mheader = document.querySelector("#mod-header");
    const MheaderBGW = document.querySelector(".m-bg-w");
    const MheaderBGC = document.querySelector(".m-bg-c");
    let afterMwinTop = document.documentElement.scrollTop;
    const MheaderTP = 65;
    if (afterMwinTop < 50) {
      console.log("head");
      Mheader.classList.remove("sticky");
      MheaderBGC.style.background = "rgba(0, 0, 0, 0.0)";
    }
    if (afterMwinTop > 50) {
      // console.log('wheel up')
      if (beforeMwinTop < afterMwinTop) {
        // 스크롤 아래로
        Mheader.classList.add("sticky");
      } else {
        // 스크롤 위로
        setTimeout(function () {
          Mheader.classList.remove("sticky");
          Mheader.style.background = "rgba(0, 0, 0, 0.6)";
        }, 500);
        Mheader.classList.add("sticky");
      }
    } else {
      // 평상 시
    }
    beforeMwinTop = afterMwinTop;
  });
}
MheaderAni();

//plugin animation------------------
new WOW().init();

//slide funtion-----------------------
const slideBox = document.querySelector(".slide-box");
let slideBoxX;

console.log(slideBoxX);

const slideUl = document.querySelector(".slide-list"); // Slide parent dom
const slideLi = document.querySelectorAll(".slide-list li");
const slideimg = document.querySelector(".slide-list li img");
const slidebar = document.querySelectorAll(".progress-bar span");
const slideA = document.querySelectorAll(".progress-bar a");

resizing();
function resizing() {
  slideBoxX = slideBox.offsetWidth;
  for (let w = 0; w < slideLi.length; w++) {
    slideLi[w].style.width = slideBoxX + "px";
  }
  // setTimeout(showSlides, 5000);
}

let timer;
window.addEventListener("resize", function () {
  // resizing();
  clearTimeout(timer);

  timer = setTimeout(function () {
    resizing();
    slideUl.style.transform = "translateX(-" + indexNum * slideBoxX + "px)";
    // const slideUlbox = slideUl.offsetWidth;
    // console.log(slideUlbox);
  }, 300);
});

let indexNum = -1;
showSlides(indexNum);
function clickBar(n) {
  indexNum = n;
  for (let e = 0; e < slideLi.length; e++) {
    slidebar[e].classList.remove("gegeBar");
    slidebar[e].style.width = "0%";
    slideA[e].style.background = "rgba(0, 0, 0, 0.3)";
    slideA[e].style.border = "rgba(0, 0, 0, 0.3)";
  }

  slidebar[indexNum + 1].className += " gegeBar";
  slideUl.style.transform = "translateX(-" + (indexNum + 1) * slideBoxX + "px)";
  slideA[indexNum + 1].style.background = "";
  slideA[indexNum + 1].style.border = "";
}

function showSlides() {
  // console.log(indexNum);

  if (indexNum < slideLi.length) {
    indexNum += 1;
  }
  if (indexNum >= slideLi.length) {
    indexNum = 0;
  }
  slideUl.style.transform = "translateX(-" + indexNum * slideBoxX + "px)";

  for (let e = 0; e < slideLi.length; e++) {
    slidebar[e].classList.remove("gegeBar");
    slideA[e].style.background = "rgba(0, 0, 0, 0.3)";
    slideA[e].style.border = "rgba(0, 0, 0, 0.3)";
    // slidebar[e].style.width = "0%";

    slideA[e].addEventListener("mouseover", function () {
      slidebar[e].style.width = "100%";
      slideA[e].style.background = "transparent";
      slideA[e].style.border = "transparent";
    });

    slideA[e].addEventListener("mouseout", function () {
      slidebar[e].style.width = "0%";
      slideA[e].style.background = "rgba(0, 0, 0, 0.3)";
      slideA[e].style.border = "rgba(0, 0, 0, 0.3)";
    });
  }

  if (indexNum >= 0) {
    slidebar[indexNum].className += " gegeBar";
    slideA[indexNum].style.background = "transparent";
    slideA[indexNum].style.border = "transparent";
  }

  setTimeout(showSlides, 5000);
}

// slider 2line-------------------------

let indexL = 0;

showSlidesLine(indexL);

function plusSlides(n) {
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");

  let num = (indexL += n);

  if (num > 4) {
    // indexL = 4
    btnNext.style.display = "none";
  } else if (0 < num < 4) {
    btnPrev.style.opacity = "100";
    btnNext.style.display = "block";
  }
  if (num <= 0) {
    indexL = 0;
    btnPrev.style.opacity = "0";
    btnNext.style.display = "block";
  }
  showSlidesLine(num);
}

// console.log(indexL);

function showSlidesLine(m) {
  const slideUL1 = document.querySelector(".slide-line-list1"); // Slide parent dom
  const slideUL2 = document.querySelector(".slide-line-list2"); // Slide parent dom
  const slideLiL1 = document.querySelectorAll(".slide-line-list1 li");
  const slideLiL2 = document.querySelectorAll(".slide-line-list2 li");
  const slideLiLX1 = slideLiL1[1].offsetWidth;
  let q = m;
  let r = m;
  if (m == 5) {
    q = m - 1;
  }
  if (r == 5) {
    r = 5;
  }

  console.log(m);
  console.log(q);

  slideUL1.style.transform = "translateX(-" + r * (slideLiLX1 + 20) + "px)";
  slideUL2.style.transform = "translateX(-" + q * (slideLiLX1 + 20) + "px)";
}

boxcolor();
// slider line box color
function boxcolor() {
  const slideLiLA1 = document.querySelectorAll(".slide-line-list1 li a");
  const slideLiLA2 = document.querySelectorAll(".slide-line-list2 li a");
  const boxColor1 = [
    "rgb(0, 143, 251)",
    "rgb(244, 117, 86)",
    "rgb(110, 167, 255)",
    "rgb(255, 125, 226)",
    "rgb(193, 227, 91)",
    "rgb(59, 225, 140)",
    "rgb(152, 209, 58)",
    "rgb(255, 149, 153)",
    "rgb(248, 132, 238)",
    "rgb(51, 51, 51)",
  ];
  const boxColor2 = [
    "rgb(41, 221, 233)",
    "rgb(0, 224, 144)",
    "rgb(208, 145, 244)",
    "rgb(0, 184, 230)",
    "rgb(122, 230, 122)",
    "rgb(255, 119, 0)",
    "rgb(255, 200, 5)",
    "rgb(250, 133, 171)",
    "rgb(194, 123, 255)",
  ];

  for (let i = 0; i < 9; i++) {
    slideLiLA1[i].addEventListener(
      "mouseover",
      function () {
        slideLiLA1[i].style.background = boxColor1[i];
        // setTimeout(function() {
        //   slideLiLA1[i].style.background = "";
        // },500);
      },
      false
    );
    slideLiLA2[i].addEventListener(
      "mouseover",
      function () {
        slideLiLA2[i].style.background = boxColor2[i];
        // setTimeout(function() {
        //   slideLiLA2[i].style.background = "";
        // }, 500);
      },
      false
    );
    // slideLiLA1[i].style.background = '#f4f4f4';
    slideLiLA1[i].addEventListener(
      "mouseout",
      function () {
        slideLiLA1[i].style.background = "";
      },
      false
    );
    slideLiLA2[i].addEventListener(
      "mouseout",
      function () {
        slideLiLA2[i].style.background = "";
      },
      false
    );
  }

  // console.log(slideLiLA1);
}

// test.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);
