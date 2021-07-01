

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