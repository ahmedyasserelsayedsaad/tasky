



let navbar=document.querySelector('.navbar');
let menubtn=document.querySelector('#menu-btn');
let loginform=document.querySelector('.login-form');
let loginbtn=document.querySelector('#login-btn');
let cxmark=document.querySelector('.fa-circle-xmark');



////////////login form 

loginbtn.onclick = ()=>{
  loginform.classList.toggle('active');
  loginform.style.background='#eee'
   
    navbar.classList.remove('active');
}
cxmark.onclick=()=>{
  loginform.classList.remove('active');
}

let arabic=document.querySelector('.arabic1')
let arabics=document.querySelector('.arabics')
let bodyy = document.getElementById('bodyy')

arabic.onclick=()=>{
  console.log('jhjhjjh')
if(arabic.textContent==='العربيه'){
 
  let ff=arabics.getAttribute('src')
  arabics.setAttribute('src','imgs/usa.jpg')
  console.log(ff);
  bodyy.setAttribute('dir','rtl')
 // console.log('gfgfg')

 return arabic.textContent='english';
}
else{
  bodyy.setAttribute('dir','ltr');
  arabics.setAttribute('src','imgs/Flag-Saudi-Arabia.webp');
  arabics.style.paddingleft='50px';
  return   arabic.textContent='العربيه';
}

}



////////menu

 menubtn.onclick=()=>{
    navbar.classList.toggle('active');
   
    loginform.classList.remove('active');
 }

 
//////////// chooses

let chek=document.querySelector('.chekbox');
let correct=document.querySelector('.fa-check')
let ch=document.getElementById('ch');
let che=document.getElementById('che');
chek.onclick=()=>{
  //correct.style.display='block';
   chek.classList.toggle('active')
   correct.style.display='block';

}
ch.onclick=()=>{
 // correct.style.display='none'
   ch.classList.toggle('activee')
    correct.style.display='block'
 
 ;

}
che.onclick=()=>{
  //correct.style.display='none'
   che.classList.toggle('active')
    correct.style.display='block'
 

}

/////////////////counter&total

let dec=document.querySelector('.dcrease')
let inc=document.querySelector('.increase')
let tot=document.querySelector('.total')
let count=document.querySelector('.count')
dec.onclick=()=>{
count.innerHTML--
tot.innerHTML=` $${count.innerHTML*100}`
}
inc.onclick=()=>{
  count.innerHTML++
  tot.innerHTML=` $${count.innerHTML*100}`
  }

///////////readmore
  let dot=document.querySelector('.dots')
  let read=document.querySelector('.readmore')

  dot.onclick=()=>{
    read.style.display='block'
    dot.style.display='none'
  }

  read.onclick=()=>{
    read.style.display='none'
    dot.style.display='block'
  }
/////////////////////////////////////////////////////////////////////////////
  let doot=document.querySelector('.doots')
  let rread=document.querySelector('.readmorre')

  doot.onclick=()=>{
    rread.style.display='block'
    doot.style.display='none'
  }

  rread.onclick=()=>{
    rread.style.display='none'
    doot.style.display='block'
  }

////////////////////////////////

let dotts=document.querySelector('.dotts')
let readmoree=document.querySelector('.readmoree')

dotts.onclick=()=>{
  readmoree.style.display='block'
  dotts.style.display='none'
}

readmoree.onclick=()=>{
  readmoree.style.display='none'
  dotts.style.display='block'
}


/////////////add to fav in cads
  let solid=document.getElementById('solid');
  let heart=document.getElementById('heart')

  heart.onclick=()=>{
    solid.style.display='block';
    heart.style.display='none';
    alert('added to your fav')
  }
  solid.onclick=()=>{
    heart.style.display='block';
    solid.style.display='none'
  }

  let solid1=document.getElementById('solid1');
  let heart1=document.getElementById('heart1')

  heart1.onclick=()=>{
    solid1.style.display='block';
    heart1.style.display='none';
    alert('added to your fav')
  }
  solid1.onclick=()=>{
    heart1.style.display='block';
    solid1.style.display='none'
  }

  let solid2=document.getElementById('solid2');
  let heart2=document.getElementById('heart2')

  heart2.onclick=()=>{
    solid2.style.display='block';
    heart2.style.display='none';
    alert('added to your fav')
  }
  solid2.onclick=()=>{
    heart2.style.display='block';
    solid2.style.display='none'
  }
  let solid3=document.getElementById('solid3');
  let heart3=document.getElementById('heart3')

  heart3.onclick=()=>{
    solid3.style.display='block';
    heart3.style.display='none';
    alert('added to your fav')
  }
  solid3.onclick=()=>{
    heart3.style.display='block';
    solid3.style.display='none'
  }


//////////////scroll to top

  let scrollbtn=document.querySelector('#scroll-btn');
  window.onscroll=()=> {
      if(scrollY>250){
          scrollbtn.style.display='block';
      }
      else{
          scrollbtn.style.display='none';
      }
     }
     scrollbtn.onclick = ()=>{
         scroll({
             left:0,
             top:0,
             behavior:"smooth"
         })
     }
 

     ///////////////vido btn

     let vbtn=document.getElementById('dis')
     let alertr=document.getElementById('alla')
     setTimeout(() => {
      vbtn.style.display='none';
      alertr.style.display='none'
      console.log('gfgfg')
     }, 3000);