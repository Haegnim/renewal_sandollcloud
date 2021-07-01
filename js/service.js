
function MheaderAni(){

  // console.log(header);  
  

  // document.addEventListener('scroll', function() {
  
  // // console.log(headerTP);

  // });
  let beforeMwinTop = document.documentElement.scrollTop;

  document.addEventListener('scroll', function() {
    const Mheader = document.querySelector('#mod-header');
    const MheaderBGW = document.querySelector('.m-bg-w');
    const MheaderBGC = document.querySelector('.m-bg-c');
    let afterMwinTop = document.documentElement.scrollTop;
    const MheaderTP = 65;
    if(afterMwinTop < 50){
      console.log('head');
      Mheader.classList.remove('sticky');
      MheaderBGW.style.background = "rgba(0, 0, 0, 0.6)";
    }
    if(afterMwinTop > 50){
      // console.log('wheel up')
      if(beforeMwinTop < afterMwinTop ){
        // 스크롤 아래로 
        Mheader.classList.add('sticky');
      } else {
        // 스크롤 위로
      console.log('down');
      console.log('up');
      Mheader.classList.remove('sticky');
      Mheader.style.background = "rgba(0, 0, 0, 0.6)";  
      }

    } else {
        // 평상 시

      console.log('normal');

    }
    beforeMwinTop = afterMwinTop;
    

  });
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

  //--service page tabs filter-----------------
  const tabs = document.querySelectorAll('.service_category ul li a');
  const all = document.querySelector('.all');
  const hangeul = document.querySelector('.hangeul');
  const latin = document.querySelector('.latin');
  const chinese = document.querySelector('.chinese');

  const filter = document.querySelectorAll('.cp-list-wrapper');

  // Turns node list into an array
  const filterArr = Array.from(filter);
  const tabsArr = Array.from(tabs);
  // console.log(filterArr);

  all.addEventListener('click', showAll);
  hangeul.addEventListener('click', showHangeul);
  latin.addEventListener('click', showLatin);
  chinese.addEventListener('click', showChinese);


  function showAll() {
    filterArr.forEach(div => {
      div.classList.remove('remove');
    });
    tabsArr.forEach(a => {
      a.classList.remove('active')
    });
    all.classList.add('active');
  };

  function showHangeul() {
    filterArr.forEach(div => {
      div.classList.remove('remove')

      if (!div.dataset.hangeul) {
        div.classList.add('remove')
      };

    });
    tabsArr.forEach(a => {
      a.classList.remove('active')
    });
    hangeul.classList.add('active');
  };

  function showLatin() {
    filterArr.forEach(div => {
      div.classList.remove('remove')

      if (!div.dataset.latin) {
        div.classList.add('remove')
      };

    });
    tabsArr.forEach(a => {
      a.classList.remove('active')
    });
    latin.classList.add('active');
  };

  function showChinese() {
    filterArr.forEach(div => {
      div.classList.remove('remove')

      if (!div.dataset.chinese) {
        div.classList.add('remove')
      };

    });
    tabsArr.forEach(a => {
      a.classList.remove('active')
    });
    chinese.classList.add('active');
  };


  //card hover 때 border color에 data-color로 넣기
  //card hover 때 btn color에 data-color로 넣기
  const viewGo = document.querySelectorAll('.cp-list-wrapper > p a');
  const card = document.querySelectorAll('.card');
  const cardbtn = document.querySelectorAll('.card .btn-rounded');
  const cardHoll = document.querySelectorAll('.holl');
  // console.log(card);
  // console.log(viewGo);

  for (let j = 0; j < viewGo.length; j++) {
    viewGo[j].addEventListener('mouseover', function() {
      const viewGoColor = viewGo[j].closest('.cp-list-wrapper').dataset.color;
      viewGo[j].style.color = viewGoColor;
    });
    viewGo[j].addEventListener('mouseout', function() {
      viewGo[j].style.color = '';

    });
  }

  for (let i = 0; i < card.length; i++) {
    const cardColor = cardbtn[i].closest('.cp-list-wrapper').dataset.color;
    cardbtn[i].style.background = cardColor;

    card[i].addEventListener('mouseover', function() {
      card[i].style.borderColor = cardColor;
      cardHoll[i].style.borderLeftColor = cardColor;
    });

    card[i].addEventListener('mouseout', function() {
      card[i].style.border = '';
      cardHoll[i].style.borderLeftColor = '';
    });
  };

  const cardUl = document.querySelectorAll('.card-list');
  const cardLiX = card[0].offsetWidth;

  // console.log(modwin);
  // console.log(cardLiX);
  // console.log(filter);
  // const modwin = window.innerWidth;
  cardX();
  window.addEventListener('resize', function() {
    // const modwin = window.innerWidth;
    cardX();
  });

  function cardX() {
    const modwin = window.innerWidth;

    if (modwin < 1045) {
      for (let h = 0; h < cardUl.length; h++) {
        const cardLiLength = cardUl[h].getElementsByTagName("li");
        cardUl[h].style.width = cardLiX * cardLiLength.length + 'px';
      };
    } else {
      console.log('resize');
      for (let h = 0; h < cardUl.length; h++) {
        cardUl[h].style.width = '100%';
      }
    };

  };
