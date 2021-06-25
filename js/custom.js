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