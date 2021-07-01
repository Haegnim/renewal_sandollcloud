// --------- Header top animation ----------------
function headerAni(){
  const header = document.querySelector('#header');
  // console.log(header);  

  document.addEventListener('scroll', function() {
  let winTop = document.documentElement.scrollTop;
  // console.log(winTop);
  const headerTP = 65;
  // console.log(headerTP);

    if(winTop >= headerTP){
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}
headerAni();

//--------- Mobile Header top animation ----------------
function MheaderAni(){
  const Mheader = document.querySelector('#mod-header');
  // console.log(header);  
  

  // document.addEventListener('scroll', function() {
  
  // // console.log(headerTP);

  // });
  window.onmousewheel = function(e){
    let MwinTop = document.documentElement.scrollTop;
    const MheaderTP = 65;
    if(e.wheelDelta === 120){
      // console.log('wheel up')
      Mheader.classList.remove('sticky');
      Mheader.style.background = "rgba(0, 0, 0, 0.7)"
      
    }else if(MwinTop <= MheaderTP){
      Mheader.classList.remove('sticky');
      // Mheader.style.background = "rgba(0, 0, 0, 0.0)";
      // console.log(MwinTop);
      // console.log(MheaderTP);
  }else{
    Mheader.classList.add('sticky');
  };
  
   
  }
};
MheaderAni();

//---------- Service page tab fixed
function serviceTabFixe(){
  const svFixe = document.querySelector('.service_category');
  const svFixeUl = document.querySelector('.service_category ul');

  // console.log('hello');  
  // console.log(svFixeUl);  

  document.addEventListener('scroll', function() {
  let winTop = document.documentElement.scrollTop;
  // console.log(winTop);
  const tabH = 200;
  // console.log(headerTP);

    if(winTop >= tabH){
      svFixe.classList.add('tab-active');
      svFixeUl.classList.remove('tab-ul-active');

      // console.log('add'); 
    } else {
      svFixe.classList.remove('tab-active');
      svFixeUl.classList.add('tab-ul-active');

      // console.log('remove'); 
    }
  });
}
serviceTabFixe();

//plugin animation------------------
new WOW().init();





//mobile header------------------


const mbtn = document.querySelector('#threeLine');
const xbtn = document.querySelector('#XLine');
const mGlo = document.querySelector('#global');
const mtab = document.querySelector('#moBnav');
const mwin = document.querySelector('#mobile-win');
const mH= document.querySelector('#mod-header');

// mbtn.addEventListener('click',function(){

  
//   // console.log('mobile');
// })

// mbtn.addEventListener('click',function(){

//   // mtab.style.display = "none";
//   // xbtn.style.display = "none";
//   // mbtn.style.display = "block";
//   // mGlo.style.display = "block";
//   // mtab.style.transform = "translateX(-100%)";

//   // mwin.style.transform = "translateX(0%)";
//   // mH.style.transform = "translateX(-70%)";

  
//   console.log('mobile');
// })
let index = 1;
function mob(m){
 
  let q = index += m;
  console.log(q);

  let num = q % 2;
  console.log(num);

  if(num == 0){
    mtab.style.display = "block";
    mtab.style.transform = "translateX(0)";
  
    mwin.style.transform = "translateX(-70%)";
    mH.style.transform = "translateX(-70%)";
  }
  if(num == 1){
    mtab.style.display = "none";
    mtab.style.transform = "translateX(100%)";
  
    mwin.style.transform = "translateX(0%)";
    mH.style.transform = "translateX(0%)";
  }
}