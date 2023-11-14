const circle = document.querySelectorAll('.circle')
const progress = document.getElementById('progress-bar')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


let currentActive = 1
next.addEventListener('click',()=>{
  currentActive++;
  if(currentActive>circle.length){
    currentActive=circle.length
  }
  update()
})

prev.addEventListener('click',()=>{
  currentActive--;
  if(currentActive<1){
    currentActive=1
  }
  update()
})

function update(){
  //update active class in circle
circle.forEach((circle,index)=>{
  if(index<currentActive){
    circle.classList.add('active')
  }else{
    circle.classList.remove('active')
  }
});

  //update the progress-bar 
let activeCircle=document.querySelectorAll('.active');
progress.style.width = (activeCircle.length-1)/(circle.length-1)*100+'%';

  //change the button enable and disabled status

if(currentActive===1){
  prev.disabled=true;
}else if(currentActive===circle.length){
  next.disabled=true
}else{
  prev.disabled = false
  next.disabled = false
}
}
