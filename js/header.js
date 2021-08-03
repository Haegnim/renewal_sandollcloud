// --------- Header top animation ----------------
function headerAni() {
  const header = document.querySelector("#header");
  // console.log(header);

  document.addEventListener("scroll", function () {
    let winTop = document.documentElement.scrollTop;
    // console.log(winTop);
    const headerTP = 65;
    // console.log(headerTP);

    if (winTop >= headerTP) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}
headerAni();

//--------- Mobile Header top animation ----------------
// function MheaderAni(){

//   // console.log(header);

//   // document.addEventListener('scroll', function() {

//   // // console.log(headerTP);

//   // });
//   document.addEventListener('scroll', function(e) {
//     const Mheader = document.querySelector('#mod-header');
//     const MheaderBGW = document.querySelector('.m-bg-w');
//     const MheaderBGC = document.querySelector('.m-bg-c');
//     let MwinTop = document.documentElement.scrollTop;
//     const MheaderTP = 65;
//     if(e.wheelDelta === 120){
//       // console.log('wheel up')
//       Mheader.classList.remove('sticky');
//       Mheader.style.background = "rgba(0, 0, 0, 0.6)";

//     }else if(MwinTop <= MheaderTP){
//       Mheader.classList.remove('sticky');
//       MheaderBGC.style.background = "rgba(0, 0, 0, 0.0)";
//       MheaderBGW.style.background = "rgba(0, 0, 0, 0.6)";
//       // console.log(MwinTop);
//       // console.log(MheaderTP);
//   }else{
//     Mheader.classList.add('sticky');
//   };

//   });
// };
// MheaderAni();

//mobile header------------------
const mbtn = document.querySelector("#threeLine");
const mbg = document.querySelector(".m-back");
const moBa = document.querySelector("#moBnav");
const modNav = document.querySelector("#mod-nav");
const mwin = document.querySelector("#mobile-win");
const mH = document.querySelector("#mod-header");

let index = 1;
function mob(m) {
  let q = (index += m);
  console.log(q);

  let num = q % 2;
  console.log(num);

  if (num == 0) {
    mbg.style.display = "block";
    moBa.style.display = "block";

    mbtn.classList.add("x-line");
    modNav.style.transform = "translateX(0)";
    // Mwrap.style.transform = "translateX(-70%)";
    mwin.style.transform = "translateX(-70%)";
    mH.style.transform = "translateX(-70%)";
  }
  if (num == 1) {
    mbtn.classList.remove("x-line");
    moBa.style.display = "none";

    mbg.style.display = "none";
    modNav.style.transform = "translateX(70%)";
    // Mwrap.style.transform = "translateX(0%)";
    mwin.style.transform = "translateX(0%)";
    mH.style.transform = "translateX(0%)";
  }
}

footerChange();
window.addEventListener("resize", function () {
  footerChange();
});
function footerChange() {
  const modW = window.innerWidth;
  if (modW < 1045) {
    const footerTxt = document.querySelectorAll(".qlick-link ul li > a p");
    console.log(footerTxt);
    footerTxt[0].innerText = "라이선스 캠페인";
    footerTxt[3].innerText = "폰트 라이선스";
  }
}
