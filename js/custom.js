
// --------- Header top animation ----------------
function headerAni(){
  const header = document.querySelector('#header');
  let headerTop = header.top;
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

new WOW().init();




//slide funtion-----------------------
const slideBox = document.querySelector('.slide-box');
const slideBoxX = slideBox.offsetWidth;

const slideUl = document.querySelector('.slide-list'); // Slide parent dom
const slideLi = document.querySelectorAll('.slide-list li');
const slideimg = document.querySelector('.slide-list li img');
const slidebar = document.querySelectorAll('.progress-bar span');
const slideA = document.querySelectorAll('.progress-bar a');

// console.log(slidebar);
for(let w = 0; w < slideLi.length;w++){
  slideLi[w].style.width = slideBoxX + "px";
}


let indexNum = -1;

showSlides(indexNum);

function clickBar(n){
  indexNum = n;
  for(let e = 0; e < slideLi.length; e++){
    slideA[e].addEventListener('click',function(){
    slidebar[e].classList.remove('gegeBar');
    slidebar[e].style.width = "0%";

    });
  };
  
    slidebar[indexNum+1].style.width = "100%";
    slideUl.style.transform = 'translateX(-' + ((indexNum+1)*slideBoxX) + 'px)';
    slideA[indexNum+1].style.background = 'transparent';
    slideA[indexNum+1].style.border = 'transparent';

  // for(let i = 0; i <= slideLi.length; i++){
  //   slidebar[i].style.width = 0;
  //   slideA[i].style.background = 'rgba(0, 0, 0, 0.3)';
  //   slideA[i].style.border = 'rgba(0, 0, 0, 0.3)';

  //   slideA[i].addEventListener('mouseover',function(){
  //     slidebar[i].style.width = width + "%";
  //   })
  // };
}


function showSlides() {
    // console.log(indexNum);
    if(indexNum < slideLi.length){indexNum += 1};
    if(indexNum >= slideLi.length){indexNum = 0};
    slideUl.style.transform = 'translateX(-' + (indexNum*slideBoxX) + 'px)';
    
    
    for(let e = 0; e < slideLi.length; e++){
      slidebar[e].classList.remove('gegeBar');
      slideA[e].style.background = 'rgba(0, 0, 0, 0.3)';
      slideA[e].style.border = 'rgba(0, 0, 0, 0.3)';
      slidebar[e].style.width = "0%";

      // slideA[e].addEventListener('click',function(){
      // slidebar[e].classList.remove('gegeBar');

        // slidebar[e].style.width = "100%";
        // slideUl.style.transform = 'translateX(-' + (indexNum[e]*slideBoxX) + 'px)';
        // slideA[e].style.background = 'transparent';
        // slideA[e].style.border = 'transparent';
      // });

      slideA[e].addEventListener('mouseover',function(){
        
        slidebar[e].style.width = "100%";
        slideA[e].style.background = 'transparent';
        slideA[e].style.border = 'transparent';
      });

      slideA[e].addEventListener('mouseout',function(){
        slidebar[e].style.width = "0%";
        slideA[e].style.background = 'rgba(0, 0, 0, 0.3)';
        slideA[e].style.border = 'rgba(0, 0, 0, 0.3)';
      });
    };

    if(indexNum >= 0){
      slidebar[indexNum].className += ' gegeBar';
      slideA[indexNum].style.background = 'transparent';
      slideA[indexNum].style.border = 'transparent';

    };
    // if(indexNum == 0){
    //   slidebar[indexNum].className += ' gegeBar';

    // }
    // for(let i = 0; i < indexNum; i++){
    // // slideA[indexNum].style.background = 'transparent';
    // // slideA[indexNum].style.border = 'transparent';
    // //  slidebar[i].style.animation = 'Bar 3s';
    // slidebar.classList.remove('.gageBar');
    
    // for(let i = 0; i < indexNum; i++){
    //   slidebar[i].classList.remove('gegeBar');
    //   slideA[i].style.background = 'rgba(0, 0, 0, 0.3)';
    //   slideA[i].style.border = 'rgba(0, 0, 0, 0.3)';
    //   if(i < indexNum){
    //   slidebar[i].classList.add('gegeBar');
    //   slideA[i].style.background = 'transparent';
    //   slideA[i].style.border = 'transparent';
    //   }
    // }

    // slidebar[indexNum].classList.add('gegeBar');
    // slideA[indexNum].style.background = 'transparent';
    // slideA[indexNum].style.border = 'transparent';
    // console.log(slidebar[slidebar.length-1]);
/*
    var n = 0;
    function move() {
      if (n == 0) {
        n = 1;
        // var elem = document.querySelectorAll("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          
          if (width >= 100) {
            clearInterval(id);
            
            n = 0;
          } else {
            width++;
            slidebar[indexNum].style.width = width + "%";
            slideA[indexNum].style.background = 'transparent';
            slideA[indexNum].style.border = 'transparent';
          }
          if(indexNum >= 1){
            slidebar[indexNum-1].style.width = 0;
            slideA[indexNum-1].style.background = 'rgba(0, 0, 0, 0.3)';
            slideA[indexNum-1].style.border = 'rgba(0, 0, 0, 0.3)';
          } 
          if(indexNum == 0){
            slidebar[6].style.width = 0;
            slideA[6].style.background = 'rgba(0, 0, 0, 0.3)';
            slideA[6].style.border = 'rgba(0, 0, 0, 0.3)';
          }
          
          
        }
      };
    };
    move();
    */
    setTimeout(showSlides, 5000);
};


// slider2----------------------------
// var slideIndex2 = 1;
// showSlides(slideIndex2);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex2 += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex2 = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// slider 2line-------------------------




let indexL = 0;


showSlidesLine(indexL);

function plusSlides(n){
  showSlidesLine(indexL += n);
}
console.log(indexL);
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
if(indexL = 0){
  btnPrev.style.display = "none";
}

function showSlidesLine(m) {

  const slideUL1 = document.querySelector('.slide-line-list1'); // Slide parent dom
  const slideUL2 = document.querySelector('.slide-line-list2'); // Slide parent dom
  const slideLiL1 = document.querySelectorAll('.slide-line-list1 li');
  const slideLiL2 = document.querySelectorAll('.slide-line-list2 li');
  const slideLiLX1 = slideLiL1[1].offsetWidth;



  
  // slideUL1.style.transform = 'translateX(' + (1*238) + 'px + 20px)';

  // if(m < slideLiL1.length){m += 1};
 
  
  // if(m = 0){ btnPrev.style.display = "none";}
  // for(i = 0; i < 4; i++){
    if(m >= 4){m = 0};
    slideUL1.style.transform = 'translateX(-' + m*(slideLiLX1+20) +'px)';
    slideUL2.style.transform = 'translateX(-' + m*(slideLiLX1+20) +'px)';
    
    console.log(m);
  // }
  
  // btnPrev.addEventListener('click',function(){
  //   if(indexL < slideLiL1.length){indexL -= 1};
  //   if(indexL >= slideLiL1.length){indexL = 0};
  //   slideUL1.style.transform = 'translateX(' + indexL*(slideLiLX1+20) +'px)';
  //   slideUL2.style.transform = 'translateX(' + indexL*(slideLiLX1+20) +'px)';
  //   // alert('hello-v');
  //   // if(indexNum < slideLi.length){indexNum += 1};
  //   // if(indexNum >= slideLi.length){indexNum = 0};
  //   // slideUL2.style.transform = 'translateX(' + (indexL*slideLiLX1) + '20px + px)';
  //   return indexL;
  // });
  // btnNext.addEventListener('click',function(){
  //   // alert('hello-x');
  //   // slideUL1.style.transform = 'translateX(-258px)';

    
  //   console.log(indexL);
  //   slideUL1.style.transform = 'translateX(-' + indexL*(slideLiLX1+20) +'px)';
  //   slideUL2.style.transform = 'translateX(-' + indexL*(slideLiLX1+20) +'px)';


  //   // slideUL1.style.transform = 'translateX(-' + (indexL*238) + 'px)';
  //   // slideUL2.style.transform = 'translateX(-' + (indexL*238) + 'px)';
  //   return indexL;
  // });
  // console.log(indexL);
};